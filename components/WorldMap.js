"use client";

import { useMemo, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import worldAtlas from "world-atlas/countries-110m.json";
import { countries, countryById, countryByName, mapExtraById } from "@/data/countries";

const featuredIds = ["364", "392", "276", "250", "840", "826", "156", "076", "124", "036", "410", "643"];
const continents = [
  { name: "North America", x: 130, y: 105 },
  { name: "South America", x: 205, y: 270 },
  { name: "Europe", x: 470, y: 105 },
  { name: "Africa", x: 465, y: 245 },
  { name: "Asia", x: 640, y: 130 },
  { name: "Oceania", x: 760, y: 330 },
];
const normalize = (value) => value?.trim().toLowerCase();
const countryKey = (country) => `${country.id}:${country.name}`;
const resolveCountry = (geo) => {
  const name = normalize(geo.properties?.name);
  const id = String(geo.id).padStart(3, "0");
  return (name && countryByName[name]) || countryById[id] || mapExtraById[id];
};
const featuredCountries = featuredIds.map((id) => countryById[id]).filter(Boolean);
const MIN_ZOOM = 1;
const MAX_ZOOM = 3.5;
const ZOOM_STEP = 0.35;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

export default function WorldMap() {
  const [selected, setSelected] = useState(countryById["364"]);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const dragged = useRef(false);

  const filteredCountries = useMemo(() => {
    const value = normalize(query);
    if (!value) return featuredCountries;
    return countries.filter((country) =>
      normalize(country.name).includes(value) ||
      normalize(country.nationality).includes(value)
    ).slice(0, 20);
  }, [query]);

  const hasSearch = query.trim().length > 0;

  const clampPan = (nextPan, nextZoom = zoom) => {
    if (nextZoom <= MIN_ZOOM) return { x: 0, y: 0 };
    const viewport = gesture.current?.viewport;
    if (!viewport) return nextPan;
    const maxX = Math.max(0, (viewport.width * (nextZoom - 1)) / 2);
    const maxY = Math.max(0, (viewport.height * (nextZoom - 1)) / 2);
    return {
      x: Math.max(-maxX, Math.min(maxX, nextPan.x)),
      y: Math.max(-maxY, Math.min(maxY, nextPan.y)),
    };
  };

  const setZoomLevel = (nextZoom, focalPoint) => {
    const clampedZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextZoom));
    if (!focalPoint || clampedZoom === MIN_ZOOM) {
      setZoom(clampedZoom);
      if (clampedZoom === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return;
    }
    setPan((currentPan) => clampPan({
      x: focalPoint.x - (focalPoint.x - currentPan.x) * (clampedZoom / zoom),
      y: focalPoint.y - (focalPoint.y - currentPan.y) * (clampedZoom / zoom),
    }, clampedZoom));
    setZoom(clampedZoom);
  };

  const resetMap = () => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  };

  const handlePointerDown = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    gesture.current = {
      viewport: { width: rect.width, height: rect.height },
      last: { x: event.clientX, y: event.clientY },
      moved: false,
    };
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current.pinch = {
        distance: distance(a, b),
        zoom,
        midpoint: midpoint(a, b),
        pan,
      };
    }
  };

  const handlePointerMove = (event) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const pinch = gesture.current?.pinch;
      if (!pinch) return;
      dragged.current = true;
      const currentDistance = distance(a, b);
      const nextZoom = Math.max(MIN_ZOOM, Math.min(
        MAX_ZOOM,
        pinch.zoom * (currentDistance / Math.max(pinch.distance, 1))
      ));
      const currentMidpoint = midpoint(a, b);
      const ratio = nextZoom / pinch.zoom;
      setZoom(nextZoom);
      setPan(clampPan({
        x: currentMidpoint.x - (pinch.midpoint.x - pinch.pan.x) * ratio,
        y: currentMidpoint.y - (pinch.midpoint.y - pinch.pan.y) * ratio,
      }, nextZoom));
      return;
    }

    const start = gesture.current;
    if (!start) return;
    const dx = event.clientX - start.last.x;
    const dy = event.clientY - start.last.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) {
      start.moved = true;
      dragged.current = true;
    }
    setPan((currentPan) => clampPan({ x: currentPan.x + dx, y: currentPan.y + dy }));
    start.last = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2 && gesture.current) gesture.current.pinch = null;
    if (pointers.current.size === 0) gesture.current = null;
  };

  const handleWheel = (event) => {
    if (!event.ctrlKey && Math.abs(event.deltaY) < 1) return;
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const focalPoint = {
      x: event.clientX - (rect.left + rect.width / 2),
      y: event.clientY - (rect.top + rect.height / 2),
    };
    setZoomLevel(zoom + (event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP), focalPoint);
  };

  return (
    <section className="map-layout">
      <div className="map-panel">
        <div className="map-toolbar">
          <div>
            <div className="section-kicker">INTERACTIVE MAP</div>
            <p>Countries only · no cities · no capitals</p>
          </div>
          <div className="map-hint">Select a country</div>
        </div>

        <div
          className="map-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          style={{ touchAction: "none" }}
          aria-label="Interactive map. Drag to pan, pinch to zoom, or use the controls."
        >
          <div className="map-transform" style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})` }}>
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 155 }}
              width={900}
              height={480}
              aria-label="Interactive world map"
            >
              <Geographies geography={worldAtlas}>
                {({ geographies }) => (
                  <>
                    {geographies.map((geo) => {
                      const country = resolveCountry(geo);
                      const isSelected = country && countryKey(country) === countryKey(selected);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onClick={() => {
                            if (dragged.current) {
                              dragged.current = false;
                              return;
                            }
                            if (country) setSelected(country);
                          }}
                          onKeyDown={(event) => {
                            if ((event.key === "Enter" || event.key === " ") && country) {
                              event.preventDefault();
                              setSelected(country);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={country ? country.name : geo.properties?.name || "Country"}
                          aria-pressed={isSelected}
                          aria-disabled={!country}
                          className={["country-shape", isSelected ? "selected" : "", !country ? "unavailable" : ""].filter(Boolean).join(" ")}
                        />
                      );
                    })}
                    {continents.map((continent) => (
                      <text key={continent.name} x={continent.x} y={continent.y} className="continent-label" textAnchor="middle">
                        {continent.name}
                      </text>
                    ))}
                  </>
                )}
              </Geographies>
            </ComposableMap>
          </div>

          <div className="map-controls" aria-label="Map zoom controls">
            <button type="button" className="map-control-button" onClick={() => setZoomLevel(zoom + ZOOM_STEP)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">+</button>
            <button type="button" className="map-control-button" onClick={() => setZoomLevel(zoom - ZOOM_STEP)} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out">−</button>
            <button type="button" className="map-control-button map-reset-button" onClick={resetMap} aria-label="Reset map to world view" title="World view">
              <span aria-hidden="true">🌐</span><span className="sr-only">World</span>
            </button>
          </div>

          <div className="map-gesture-hint">
            <span>Drag to move</span><span>Pinch or + / − to zoom</span>
          </div>
        </div>
      </div>

      <aside className="country-panel">
        <div className="country-panel-top">
          <div className="section-kicker">SELECTED COUNTRY</div><span className="country-dot" />
        </div>
        <h2>{selected.name}</h2>
        <div className="nationality-label">NATIONALITY</div>
        <div className="nationality-value">{selected.nationality}</div>
        <p className="country-sentence">{selected.sentence}</p>

        <div className="country-browser">
          <div className="country-search-label">
            <label htmlFor="country-search">Find a country</label>
            {hasSearch && <button className="clear-search" type="button" onClick={() => setQuery("")} aria-label="Clear country search">Clear</button>}
          </div>
          <input id="country-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search country or nationality..." autoComplete="off" />
          <div className="country-results" aria-live="polite">
            {filteredCountries.length > 0 ? filteredCountries.map((country) => (
              <button key={country.id} type="button" className={countryKey(country) === countryKey(selected) ? "selected" : ""} onClick={() => { setSelected(country); setQuery(""); }}>
                <span>{country.name}</span><span>{country.nationality}</span>
              </button>
            )) : <p className="country-empty">No matching country found.</p>}
          </div>
          <p className="country-count">
            {hasSearch ? "Showing up to 20 matches from " + countries.length + " countries." : countries.length + " countries available to search."}
          </p>
        </div>
      </aside>
    </section>
  );
}
