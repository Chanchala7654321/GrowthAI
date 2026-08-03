import "./ReportSection.css";

const ReportSection = ({ title, items, icon, type }) => {
  return (
    <div className={`report-section ${type ? `section-${type}` : ""}`}>
      <h2 className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        {title}
      </h2>

      <div className="section-cards-list">
        {items?.map((item) => (
          <div className="info-card" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSection;