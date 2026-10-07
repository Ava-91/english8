"use client";

import { useEffect, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import worldAtlas from "world-atlas/countries-110m.json";
import { countries, countryById, countryByName } from "@/data/countries";

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
  return (name && countryByName[name]) || countryById[String(geo.id).padStart(3, "0")];
};

const featuredCountries = featuredIds.map((id) => countryById[id]).filter(Boolean);

export default function WorldMap() {
  const [selected, setSelected] = useState(countryById["364"]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("country");
    if (!value) return;

    const byName = countryByName[normalize(value)];
    const byId = countryById[String(value).padStart(3, "0")];
    if (byName || byId) setSelected(byName || byId);
  }, []);

  const selectCountry = (country) => {
    setSelected(country);
    const url = new URL(window.location.href);
    url.searchParams.set("country", country.name);
    window.history.replaceState({}, "", url);
  };

  const filteredCountries = useMemo(() => {
    const value = normalize(query);
    if (!value) return featuredCountries;

    return countries
      .filter((country) =>
        normalize(country.name).includes(value) ||
        normalize(country.nationality).includes(value)
      )
      .slice(0, 20);
  }, [query]);

  const hasSearch = query.trim().length > 0;

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

        <div className="map-canvas">
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
                        onClick={() => country && selectCountry(country)}
                        onKeyDown={(event) => {
                          if ((event.key === "Enter" || event.key === " ") && country) {
                            event.preventDefault();
                            selectCountry(country);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={country ? country.name : geo.properties?.name || "Country"}
                        aria-pressed={isSelected}
                        aria-disabled={!country}
                        className={[
                          "country-shape",
                          isSelected ? "selected" : "",
                          !country ? "unavailable" : "",
                        ].filter(Boolean).join(" ")}
                      />
                    );
                  })}

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
                </>
              )}
            </Geographies>
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
          <div className="country-search-label">
            <label htmlFor="country-search">Find a country</label>
            {hasSearch && (
              <button
                className="clear-search"
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear country search"
              >
                Clear
              </button>
            )}
          </div>

          <input
            id="country-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search country or nationality..."
            autoComplete="off"
          />

          <div className="country-results" aria-live="polite">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  className={countryKey(country) === countryKey(selected) ? "selected" : ""}
                  onClick={() => {
                    selectCountry(country);
                    setQuery("");
                  }}
                >
                  <span>{country.name}</span>
                  <span>{country.nationality}</span>
                </button>
              ))
            ) : (
              <p className="country-empty">No matching country found.</p>
            )}
          </div>

          <p className="country-count">
            {hasSearch
              ? "Showing up to 20 matches from " + countries.length + " countries."
              : countries.length + " countries available to search."}
          </p>
        </div>
      </aside>
    </section>
  );
}
