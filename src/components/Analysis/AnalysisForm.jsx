import { useState } from "react";
import { FaBolt, FaChevronDown } from "react-icons/fa";
import "./AnalysisForm.css";

const AnalysisForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    businessSize: "",
    website: "",
    audience: "",
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

    console.log(formData);

    // next step:
    // navigate("/analysis/loading");
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
            <option value="">Select Industry...</option>
            <option>Retail & E-commerce</option>
            <option>Healthcare & Wellness</option>
            <option>Technology & SaaS</option>
            <option>Education & Training</option>
            <option>Food & Restaurant</option>
            <option>Real Estate</option>
            <option>Finance & Insurance</option>
            <option>Manufacturing</option>
            <option>Hospitality & Travel</option>
            <option>Professional Services</option>
            <option>Construction</option>
            <option>Entertainment & Media</option>
            <option>Other</option>
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
            <option value="">Select Size...</option>
            <option>Solo Entrepreneur</option>
            <option>Small Business (2–10 employees)</option>
            <option>Medium Business (11–50 employees)</option>
            <option>Large Business (51–200 employees)</option>
            <option>Enterprise (200+ employees)</option>
          </select>
        </div>
      </div>

      {/* Website */}

      <div className="form-group">
        <label>
          Website URL <small>(Optional)</small>
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

        <button
          type="button"
          className="fake-select"
        >
          <span>Select your challenges...</span>
          <FaChevronDown />
        </button>
      </div>

      {/* Business Goals */}

      <div className="form-group">
        <label>
          Business Goals <span>*</span>
        </label>

        <button
          type="button"
          className="fake-select"
        >
          <span>Select your goals...</span>
          <FaChevronDown />
        </button>
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

      {/* Submit */}

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