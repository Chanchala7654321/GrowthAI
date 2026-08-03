import "./RecommendationCard.css";

const RecommendationCard = ({ title, items, icon }) => {
  return (
    <div className="recommend-card">
      <h2 className="recommend-title">
        {icon && <span className="recommend-icon">{icon}</span>}
        {title}
      </h2>

      <ul className="recommend-list">
        {items?.map((item, idx) => (
          <li key={idx}>
            <span className="bullet-dot"></span>
            <span className="item-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationCard;