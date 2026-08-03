import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import MultiSelectDropdown from "./MultiSelectDropdown";
import "./AnalysisForm.css";

const challengeOptions = [
  "Low website traffic",
  "Poor conversion rates",
  "Low search engine rankings",
  "Limited social media presence",
  "High customer acquisition cost",
  "Outdated website design",
  "No online sales channel",
  "Competition from larger brands",
  "Low brand awareness",
  "Customer retention issues",
];

const goalOptions = [
  "Increase website traffic",
  "Generate more leads",
  "Boost online sales",
  "Improve brand awareness",
  "Rank higher on Google",
  "Launch e-commerce store",
  "Build social media following",
  "Reduce marketing costs",
  "Expand to new markets",
  "Improve customer engagement",
];

const AnalysisForm = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    businessSize: "",
    website: "",
    audience: "",
    challenges: [],
    goals: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChallengesChange = (selected) => {
    setFormData((prev) => ({
      ...prev,
      challenges: selected,
    }));
  };

  const handleGoalsChange = (selected) => {
    setFormData((prev) => ({
      ...prev,
      goals: selected,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.challenges.length === 0) {
      alert("Please select at least one current challenge.");
      return;
    }

    if (formData.goals.length === 0) {
      alert("Please select at least one business goal.");
      return;
    }

    localStorage.setItem("businessData", JSON.stringify(formData));

    if (onSubmitForm) {
      onSubmitForm(formData);
    }
  };

  return (
    <form className="analysis-form" onSubmit={handleSubmit}>
      {/* Business Name */}
      <div className="form-group">
        <label>
          Business Name <span>*</span>
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

      {/* Industry + Business Size */}
      <div className="form-row">
        <div className="form-group">
          <label>
            Industry <span>*</span>
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

        <div className="form-group">
          <label>
            Business Size <span>*</span>
          </label>
          <select
            name="businessSize"
            value={formData.businessSize}
            onChange={handleChange}
            required
          >
            <option value="">Select size...</option>
            <option value="Solo Entrepreneur">Solo Entrepreneur</option>
            <option value="Small Business (2–10 employees)">
              Small Business (2–10 employees)
            </option>
            <option value="Medium Business (11–50 employees)">
              Medium Business (11–50 employees)
            </option>
            <option value="Large Business (51–200 employees)">
              Large Business (51–200 employees)
            </option>
            <option value="Enterprise (200+ employees)">
              Enterprise (200+ employees)
            </option>
          </select>
        </div>
      </div>

      {/* Website */}
      <div className="form-group">
        <label>
          Website URL <small>(optional)</small>
        </label>
        <input
          type="url"
          name="website"
          placeholder="https://www.yourbusiness.com"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Current Challenges */}
      <div className="form-group">
        <label>
          Current Challenges <span>*</span>
        </label>
        <MultiSelectDropdown
          options={challengeOptions}
          selectedOptions={formData.challenges}
          onChange={handleChallengesChange}
          placeholder="Select your challenges.."
          variant="yellow"
        />
      </div>

      {/* Business Goals */}
      <div className="form-group">
        <label>
          Business Goals <span>*</span>
        </label>
        <MultiSelectDropdown
          options={goalOptions}
          selectedOptions={formData.goals}
          onChange={handleGoalsChange}
          placeholder="Select your goals..."
          variant="green"
        />
      </div>

      {/* Target Audience */}
      <div className="form-group">
        <label>
          Target Audience <span>*</span>
        </label>
        <textarea
          rows={4}
          maxLength={500}
          name="audience"
          placeholder="Describe your ideal customers — age, location, interests, pain points..."
          value={formData.audience}
          onChange={handleChange}
          required
        />
        <p className="character-count">
          {formData.audience.length}/500 characters
        </p>
      </div>

      {/* Submit Button */}
      <button type="submit" className="analysis-btn">
        <FaBolt />
        <span>Generate AI Analysis Report</span>
      </button>

      <p className="secure-text">
        Your data is analyzed securely and never shared with third parties.
      </p>
    </form>
  );
};

export default AnalysisForm;