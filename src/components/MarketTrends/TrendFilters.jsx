import "./TrendFilters.css";
import trendsData from "../../data/trendsData";

const TrendFilters = ({ category, setCategory }) => {

  const categories = [
    "All Trends",
    ...new Set(trendsData.map((item) => item.category)),
  ];

  return (
    <section className="trend-filters">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Trending Now
          </span>

          <h2 className="section-title">
            What's Shaping the
            <span> Digital Landscape</span>
          </h2>

          <p className="section-description">
            Curated insights from industry reports, expert analysis, and
            real-world data across every major digital domain.
          </p>

        </div>

        <div className="filter-buttons">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TrendFilters;