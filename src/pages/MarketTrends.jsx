import "./MarketTrends.css";

// import MarketHero from "../components/MarketTrends/MarketHero";
// import MarketStats from "../components/MarketTrends/MarketStats";
// import TrendFilters from "../components/MarketTrends/TrendFilters";
// // import TrendsGrid from "../components/MarketTrends/TrendsGrid";
// // import IndustryForecast from "../components/MarketTrends/IndustryForecast";
// // import MarketCTA from "../components/MarketTrends/MarketCTA";
// // import Newsletter from "../components/MarketTrends/Newsletter";

// const MarketTrends = () => {
//   return (
//     <main className="market-trends-page">
//       <MarketHero />
//       <MarketStats />
//       <TrendFilters />
//       {/* <TrendsGrid /> */}
//       {/* <IndustryForecast /> */}
//       {/* <MarketCTA /> */}
//       {/* <Newsletter /> */}
//     </main>
//   );
// };

// export default MarketTrends;

import { useState } from "react";

import MarketHero from "../components/MarketTrends/MarketHero";
import MarketStats from "../components/MarketTrends/MarketStats";
import TrendFilters from "../components/MarketTrends/TrendFilters";
import TrendCards from "../components/MarketTrends/TrendCards";
import IndustryForecast from "../components/MarketTrends/IndustryForecast";
import MarketCTA from "../components/MarketTrends/MarketCTA";
import Newsletter from "../components/MarketTrends/Newsletter";

const MarketTrends = () => {
  const [category, setCategory] = useState("All Trends");

  return (
    <>
      <MarketHero />

      <MarketStats />

      <TrendFilters category={category} setCategory={setCategory} />

      <TrendCards category={category} />

      <IndustryForecast />
      <MarketCTA />
      <Newsletter />
    </>
  );
};

export default MarketTrends;
