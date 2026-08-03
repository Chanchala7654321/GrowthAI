import { useState, useEffect } from "react";
import { FaBrain, FaCheck, FaCircleNotch } from "react-icons/fa";
import "./AnalysisProgress.css";

const steps = [
  "Analyzing your industry landscape...",
  "Scanning digital presence and online visibility...",
  "Evaluating market positioning and competitors...",
  "Identifying growth opportunities and gaps...",
  "Generating personalized strategic recommendations...",
  "Compiling your comprehensive report...",
];

const AnalysisProgress = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }

        const next = prev + 1;
        const stepIdx = Math.min(
          Math.floor((next / 100) * steps.length),
          steps.length - 1
        );
        setActiveStep(stepIdx);
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="analysis-progress-wrapper">
      {/* Top Gold Brain Icon */}
      <div className="brain-icon-badge">
        <FaBrain />
      </div>

      <h2 className="progress-title">Analyzing Your Business</h2>
      <p className="progress-subtitle">
        Our AI is processing your inputs and crafting a detailed report...
      </p>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-labels">
          <span className="label-text">Progress</span>
          <span className="label-percentage">{progress}%</span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Checklist items */}
      <div className="progress-steps-list">
        {steps.map((stepText, index) => {
          let status = "pending";
          if (index < activeStep || progress === 100) {
            status = "completed";
          } else if (index === activeStep && progress < 100) {
            status = "active";
          }

          return (
            <div key={stepText} className={`progress-step-card ${status}`}>
              <div className={`step-icon-box ${status}`}>
                {status === "completed" && <FaCheck />}
                {status === "active" && <FaCircleNotch className="spin-icon" />}
                {status === "pending" && <span className="dot-placeholder" />}
              </div>
              <span className="step-text">{stepText}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalysisProgress;
