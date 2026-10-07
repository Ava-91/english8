import WorldMap from "@/components/WorldMap";

export default function WorldMapPage() {
  return (
    <div className="page-shell">
      <section className="page-heading map-heading">
        <div>
          <div className="eyebrow">EXPLORE</div>
          <h1>Countries &amp; Nationalities</h1>
          <p>Click a country. Learn the nationality.</p>
        </div>
      </section>
      <WorldMap />
    </div>
  );
}
