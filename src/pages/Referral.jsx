import React from "react";
import "./Referral.css";

import ReferralHero from "../components/Referral/ReferralHero";
import HowItWorks from "../components/Referral/HowItWorks";
import EarningsSection from "../components/Referral/EarningsSection";
import Benefits from "../components/Referral/Benefits";
import ReferralForm from "../components/Referral/ReferralForm";
import ReferralFAQ from "../components/Referral/ReferralFAQ";
import ReferralCTA from "../components/Referral/ReferralCTA";

const Referral = () => {
  return (
    <main className="referral-page">
      <ReferralHero />
      <HowItWorks />
      <EarningsSection />
      <Benefits />                                                                                                                                                                                                                                                          
      <ReferralForm />
      <ReferralFAQ />
      <ReferralCTA />
    </main>
  );
};

export default Referral;