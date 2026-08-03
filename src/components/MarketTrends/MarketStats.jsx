import React from "react";
import "./MarketStats.css";

const stats = [
  {
    icon: "ri-funds-line",
    value: "₹12.5L Cr",
    title: "Global Digital Ad Spend",
    change: "+14.2% YoY",
    positive: true,
  },
  {
    icon: "ri-global-line",
    value: "3.2B",
    title: "Websites Online Worldwide",
    change: "+8.1% YoY",
    positive: true,
  },
  {
    icon: "ri-search-eye-line",
    value: "73%",
    title: "SMBs Without SEO Strategy",
    change: "-5% from 2025",
    positive: false,
  },
  {
    icon: "ri-timer-line",
    value: "5.4s",
    title: "Avg. Mobile Page Load Time",
    change: "-0.3s from 2025",
    positive: true,
  },
];

const MarketStats = () => {
  return (
    <section className="market-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              className="stats-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stats-icon">
                <i className={item.icon}></i>
              </div>

              <h2>{item.value}</h2>

              <p>{item.title}</p>

              <span className={item.positive ? "positive" : "negative"}>
                <i
                  className={
                    item.positive
                      ? "ri-arrow-up-s-line"
                      : "ri-arrow-down-s-line"
                  }
                ></i>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketStats;