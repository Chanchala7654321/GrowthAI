import React, { useState } from "react";
import "./ReferralForm.css";
import { RiUserStarLine } from "react-icons/ri";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    networkSize: "",
    experience: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // API call goes here
  };

  return (
    <div id="referral-form">
      <section className="referral-form-section">
        <div className="container">
          <div className="referral-form-wrapper">
            <div className="referral-form-header">
              <span className="form-tag">Join Now</span>

              <h2 className="form-title">
                Become a <span>Referral Partner</span>
              </h2>

              <p className="form-subtitle">
                Fill out the form below and start earning ₹1,000 for every
                successful referral.
              </p>
            </div>

            <div className="referral-card">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Your full name"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      City <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Profession / Business <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="profession"
                    placeholder="e.g. Freelancer, Agency Owner, Business Consultant"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    How Many Businesses Can You Refer? <span>*</span>
                  </label>

                  <select
                    name="networkSize"
                    value={formData.networkSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-5">1-5 businesses</option>
                    <option value="5-15">5-15 businesses</option>
                    <option value="15-30">15-30 businesses</option>
                    <option value="30-50">30-50 businesses</option>
                    <option value="50+">50+ businesses</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Relevant Experience</label>

                  <textarea
                    rows="4"
                    maxLength="500"
                    name="experience"
                    placeholder="Tell us about your experience in sales, marketing, or business networking..."
                    value={formData.experience}
                    onChange={handleChange}
                  />

                  <small>Max 500 characters</small>
                </div>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />

                  <span>
                    I agree to the referral partner terms and conditions and
                    understand that rewards are paid upon successful service
                    sign-up by referred businesses.
                  </span>
                </label>

                <button type="submit" className="submit-btn">
                  <RiUserStarLine />
                  Join Referral Program
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralForm;