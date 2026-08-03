import "./MarketHero.css";

const MarketHero = () => {
  return (
    <section className="market-hero">
      <div className="market-hero-overlay">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20modern%20digital%20landscape%20with%20flowing%20data%20streams%20and%20geometric%20patterns%20in%20warm%20cream%20beige%20and%20soft%20amber%20gold%20tones%20artistic%20visualization%20of%20market%20trends%20and%20data%20analytics%20flowing%20together%20minimal%20clean%20aesthetic%20with%20subtle%20gradient%20layers%20and%20organic%20wave%20forms&width=1600&height=900&seq=market-trends-hero-2026&orientation=landscape"
          alt="Market Trends"
          className="market-hero-image"
        />
        <div className="market-hero-gradient"></div>
      </div>

      <div className="section-container market-hero-content">
        <div className="hero-badge">
          <i className="ri-flashlight-line"></i>
          <span>Updated August 2026</span>
        </div>

        <h1>
          Market Trends <span>& Industry Insights</span>
        </h1>

        <p>
          Stay ahead with data-driven analysis of the latest developments in
          web development, SEO, digital marketing, e-commerce, and AI
          technology.
        </p>

        <div className="hero-stats">
          <div className="stat-box">
            <h2>18</h2>
            <span>Active Trends</span>
          </div>

          <div className="stat-box">
            <h2>5</h2>
            <span>Categories</span>
          </div>

          <div className="stat-box">
            <h2>Weekly</h2>
            <span>Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHero;