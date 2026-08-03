import { useState } from "react";
import {
  RiSearchEyeLine,
  RiLink,
  RiPagesLine,
  RiSearchLine,
  RiSpeedUpLine,
  RiRadarLine,
} from "react-icons/ri";
import AnalysisProgress from "../components/Analysis/AnalysisProgress";
import { useNavigate } from "react-router-dom";
import "./CompetitorAnalysis.css";

const CompetitorAnalysis = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Form, 2: Progress
  const [formData, setFormData] = useState({
    competitorUrl: "",
    businessName: "",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.competitorUrl || !formData.businessName || !formData.industry) {
      alert("Please fill in all required fields.");
      return;
    }

    localStorage.setItem(
      "businessData",
      JSON.stringify({
        businessName: formData.businessName,
        industry: formData.industry,
        website: formData.competitorUrl,
        isCompetitorAnalysis: true,
      })
    );

    setStep(2);
  };

  const handleProgressComplete = () => {
    navigate("/analysis-report");
  };

  return (
    <main className="competitor-analysis-page">
      {/* Top Stepper Header */}
      <div className="stepper-header-container">
        <div className="stepper-track">
          <div className="stepper-item active">
            <div className="stepper-circle">1</div>
            <span className="stepper-label">Enter URL</span>
          </div>
          <div className={`stepper-line ${step >= 2 ? "active" : ""}`} />
          <div className={`stepper-item ${step >= 2 ? "active" : ""}`}>
            <div className="stepper-circle">2</div>
            <span className="stepper-label">AI Analysis</span>
          </div>
          <div className="stepper-line" />
          <div className="stepper-item">
            <div className="stepper-circle">3</div>
            <span className="stepper-label">Report</span>
          </div>
        </div>
      </div>

      {step === 1 ? (
        <div className="competitor-content-container">
          <div className="header-badge-box">
            <RiSearchEyeLine />
          </div>

          <h1 className="competitor-main-heading">Competitor Website Analysis</h1>
          <p className="competitor-subheading">
            Enter any competitor website URL and our AI will generate a detailed analysis of their design, SEO, performance, content strategy, and technology choices.
          </p>

          <form className="competitor-form" onSubmit={handleSubmit}>
            {/* Competitor Website URL */}
            <div className="form-group">
              <label>
                Competitor Website URL <span>*</span>
              </label>
              <div className="input-icon-wrapper">
                <RiLink className="input-left-icon" />
                <input
                  type="url"
                  name="competitorUrl"
                  placeholder="https://www.competitor-website.com"
                  value={formData.competitorUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <small className="input-help-text">
                We'll analyze their homepage, key landing pages, and publicly available data
              </small>
            </div>

            {/* Business Name & Industry */}
            <div className="form-two-col">
              <div className="form-group">
                <label>
                  Your Business Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Your Industry <span>*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select industry...</option>
                  <option value="Retail & E-commerce">Retail & E-commerce</option>
                  <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                  <option value="Technology & SaaS">Technology & SaaS</option>
                  <option value="Education & Training">Education & Training</option>
                  <option value="Food & Restaurant">Food & Restaurant</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Finance & Insurance">Finance & Insurance</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Hospitality & Travel">Hospitality & Travel</option>
                  <option value="Professional Services">Professional Services</option>
                  <option value="Construction">Construction</option>
                  <option value="Entertainment & Media">Entertainment & Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* 3 Feature Cards */}
            <div className="competitor-cards-grid">
              <div className="feature-card">
                <div className="feature-icon-box">
                  <RiPagesLine />
                </div>
                <h4>Page Analysis</h4>
                <p>Homepage + top 5 landing pages scanned for design, structure, and UX patterns</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box">
                  <RiSearchLine />
                </div>
                <h4>SEO Audit</h4>
                <p>Meta tags, structured data, headings, internal links, and image optimization review</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box">
                  <RiSpeedUpLine />
                </div>
                <h4>Performance Check</h4>
                <p>Page speed, Core Web Vitals, mobile responsiveness, and hosting evaluation</p>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="competitor-submit-btn">
              <RiRadarLine />
              <span>Analyze Competitor Website</span>
            </button>

            <p className="privacy-note">
              Analysis is based on publicly available information only. No data is stored or shared.
            </p>
          </form>
        </div>
      ) : (
        <AnalysisProgress onComplete={handleProgressComplete} />
      )}
    </main>
  );
};

export default CompetitorAnalysis;
