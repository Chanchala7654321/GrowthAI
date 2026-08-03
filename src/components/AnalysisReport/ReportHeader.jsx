import { FiZap } from "react-icons/fi";
import "./ReportHeader.css";

const ReportHeader = ({ business }) => {
  const businessName = business?.businessName || "minfvgbjkps";

  return (
    <div className="report-header">
      <div className="badge">
        <FiZap className="badge-icon" /> Report Ready
      </div>

      <h1>Your Business Growth Report</h1>

      <p className="report-subtitle">
        Analysis for <em>{businessName}</em>
      </p>
    </div>
  );
};

export default ReportHeader;