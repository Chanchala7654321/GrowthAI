import { FaBrain } from "react-icons/fa";
import "./AnalysisHeader.css";

const AnalysisHeader = () => {
  return (
    <div className="analysis-header">
      <div className="analysis-icon">
        <FaBrain />
      </div>

      <h1>AI Business Analysis</h1>

      <p>
        Tell us about your business and our AI will generate a
        personalized growth report with actionable recommendations.
      </p>
    </div>
  );
};

export default AnalysisHeader;