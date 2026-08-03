import "./Analysis.css";

import ProgressSteps from "../components/Analysis/ProgressSteps";
import AnalysisHeader from "../components/Analysis/AnalysisHeader";
import AnalysisForm from "../components/Analysis/AnalysisForm";

const Analysis = () => {
  return (
    <main className="analysis-page">
      <div className="analysis-container">
        <ProgressSteps currentStep={1} />

        <div className="analysis-content">
          <AnalysisHeader />

          <AnalysisForm />
        </div>
      </div>
    </main>
  );
};

export default Analysis;