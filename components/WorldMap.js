"use client";

import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { countries, countryById } from "@/data/countries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const continents = [
  { name: "North America", x: 130, y: 105 },
  { name: "South America", x: 205, y: 270 },
  { name: "Europe", x: 470, y: 105 },
  { name: "Africa", x: 465, y: 245 },
  { name: "Asia", x: 640, y: 130 },
  { name: "Oceania", x: 760, y: 330 },
];

export default function WorldMap() {
  const [selectedId, setSelectedId] = useState("364");
  const [query, setQuery] = useState("");

  const selected = countryById[selectedId] || {
    name: "Choose a country",
    nationality: "—",
    sentence: "Click a country on the map to begin.",
  };

  const filteredCountries = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return countries.slice(0, 12);
    return countries
      .filter((country) =>
        country.name.toLowerCase().includes(value) ||
        country.nationality.toLowerCase().includes(value)
      )
      .slice(0, 12);
  }, [query]);

  return (
    <section className="map-layout">
      <div className="map-panel">
        <div className="map-toolbar">
          <div>
            <div className="section-kicker">INTERACTIVE MAP</div>
            <p>Countries only · no cities · no capitals</p>
          </div>
          <div className="map-hint">Click a country</div>
        </div>

        <div className="map-canvas">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 155 }}
            width={900}
            height={480}
            aria-label="Interactive world map"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = String(geo.id).padStart(3, "0");
                  const isSelected = id === selectedId;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => setSelectedId(id)}
                      tabIndex={0}
                      role="button"
                      aria-label={geo.properties?.name || "Country"}
                      className="country-shape"
                      style={{
                        default: {
                          fill: isSelected ? "#6d7cff" : "#202b40",
                          outline: "none",
                          stroke: "#0d1320",
                          strokeWidth: 0.55,
                        },
                        hover: {
                          fill: "#8190ff",
                          outline: "none",
                          stroke: "#aeb8ff",
                          strokeWidth: 0.8,
                        },
                        pressed: {
                          fill: "#aeb8ff",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {continents.map((continent) => (
              <text
                key={continent.name}
                x={continent.x}
                y={continent.y}
                className="continent-label"
                textAnchor="middle"
              >
                {continent.name}
              </text>
            ))}
          </ComposableMap>
        </div>
      </div>

      <aside className="country-panel">
        <div className="country-panel-top">
          <div className="section-kicker">SELECTED COUNTRY</div>
          <span className="country-dot" />
        </div>
        <h2>{selected.name}</h2>
        <div className="nationality-label">NATIONALITY</div>
        <div className="nationality-value">{selected.nationality}</div>
        <p className="country-sentence">{selected.sentence}</p>

        <div className="country-browser">
          <label htmlFor="country-search">Find a country</label>
          <input
            id="country-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
          />
          <div className="country-results">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => {
                  setSelectedId(country.id);
                  setQuery("");
                }}
              >
                <span>{country.name}</span>
                <span>{country.nationality}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
