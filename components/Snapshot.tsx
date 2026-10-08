import { stats } from "@/content/portfolio";

/**
 * Brief §5.3: four static tiles. Numbers are not animated from zero, and
 * "15+" means years of corporate awards, not SLIM wins.
 */
export function Snapshot() {
  return (
    <section className="snapshot" aria-label="Professional snapshot">
      <div className="container">
        <ul className="snapshot-grid">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
