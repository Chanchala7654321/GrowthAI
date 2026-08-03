import "./TrendCards.css";
import trendsData from "../../data/trendsData";

const TrendCards = ({ category }) => {

  const filteredData =
    category === "All Trends"
      ? trendsData
      : trendsData.filter(
          (item) => item.category === category
        );

  return (

    <section className="trend-cards">

      <div className="container">

        <div className="cards-grid">

          {filteredData.map((trend) => (

            <div
              className="trend-card"
              key={trend.id}
            >

              <div className="card-top">

                <div className={`icon ${trend.iconBg}`}>
                  <i className={trend.icon}></i>
                </div>

                <div className="labels">

                  <span className="trend-status">
                    {trend.trend}
                  </span>

                  <span className="trend-level">
                    {trend.level}
                  </span>

                </div>

              </div>

              <h3>{trend.title}</h3>

              <p>{trend.description}</p>

              <div className="card-stat">

                <h2>{trend.stat}</h2>

                <span>{trend.statText}</span>

              </div>

              <small>{trend.source}</small>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default TrendCards;