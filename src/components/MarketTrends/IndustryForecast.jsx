import "./IndustryForecast.css";
import forecastData from "../../data/forecastData";

const IndustryForecast = () => {
  return (
    <section className="industry-forecast">

      <div className="container">

        <div className="forecast-header">

          <span className="forecast-tag">
            Looking Ahead
          </span>

          <h2>
            Industry Forecasts
            <span> 2026 - 2028</span>
          </h2>

          <p>
            Expert projections on where the digital industry is headed
            and what businesses should prepare for.
          </p>

        </div>

        <div className="timeline">

          {forecastData.map((item) => (

            <div
              key={item.id}
              className={`timeline-item ${item.side}`}
            >

              <div className="timeline-number">
                {item.id}
              </div>

              <div className="timeline-card">

                <div className="timeline-top">

                  <span className="year">
                    {item.year}
                  </span>

                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default IndustryForecast;