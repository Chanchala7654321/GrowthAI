import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../components/Analysis/ProgressSteps";
import AnalysisHeader from "../components/Analysis/AnalysisHeader";
import AnalysisForm from "../components/Analysis/AnalysisForm";
import AnalysisProgress from "../components/Analysis/AnalysisProgress";
import "./Analysis.css";

const Analysis = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    setCurrentStep(2);
  };

  const handleProgressComplete = () => {
    navigate("/analysis-report");
  };

  return (
    <main className="analysis-page">
      <div className="analysis-container">
        <ProgressSteps currentStep={currentStep} />

        <div className="analysis-content">
          {currentStep === 1 && (
            <>
              <AnalysisHeader />
              <AnalysisForm onSubmitForm={handleFormSubmit} />
            </>
          )}

          {currentStep === 2 && (
            <AnalysisProgress onComplete={handleProgressComplete} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Analysis;