import "./GrowthCard.css";

const GrowthCard = ({ data }) => {
  const getBadgeClass = (value) => {
    if (!value) return "badge-default";
    const val = value.toLowerCase();
    if (val === "high") return "badge-high";
    if (val === "medium") return "badge-medium";
    if (val === "low") return "badge-low";
    return "badge-default";
  };

  return (
    <div className="growth-card">
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <div className="growth-badges">
        <span className={`growth-badge ${getBadgeClass(data.impact)}`}>
          Impact {data.impact}
        </span>
        <span className={`growth-badge ${getBadgeClass(data.effort)}`}>
          Effort {data.effort}
        </span>
      </div>
    </div>
  );
};

export default GrowthCard;
