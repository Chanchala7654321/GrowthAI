import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import PricingHero from "../components/Pricing/PricingHero";
import WebsitePlans from "../components/Pricing/WebsitePlans";
import SeoPlans from "../components/Pricing/SeoPlans";
import PricingCTA from "../components/Pricing/PricingCTA";
import FAQ from "../components/Pricing/FAQ";
import FinalCTA from "../components/Pricing/FinalCTA";

const Pricing = () => {
  return (
    <>

      <PricingHero />

      <WebsitePlans />

      <SeoPlans />

      <PricingCTA />

      <FAQ />

      <FinalCTA />

    </>
  );
};

export default Pricing;