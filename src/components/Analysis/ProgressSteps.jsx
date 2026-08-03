import { FiCheck } from "react-icons/fi";
import "./ProgressSteps.css";

const ProgressSteps = ({ currentStep = 1 }) => {
  const steps = ["Business Info", "AI Analysis", "Report"];

  return (
    <div className="progress-container">
      {steps.map((step, index) => {
        const isCompleted = currentStep > index + 1;
        const isActive = currentStep === index + 1;

        return (
          <div className="step-wrapper" key={index}>
            <div className="step-item">
              <div
                className={`step-circle ${
                  isActive ? "active" : isCompleted ? "completed" : ""
                }`}
              >
                {isCompleted ? <FiCheck /> : index + 1}
              </div>

              <p className={`step-title ${isActive ? "active-title" : ""}`}>
                {step}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`step-line ${
                  currentStep > index + 1 ? "line-active" : ""
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;