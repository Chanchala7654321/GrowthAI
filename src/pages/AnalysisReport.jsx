import {
  FiThumbsUp,
  FiAlertTriangle,
  FiGlobe,
  FiSearch,
//   FiMegaphone,
  FiSmartphone,
  FiTrendingUp,
  FiCalendar,
  FiDownload,
  FiRefreshCw,
} from "react-icons/fi";
import ProgressSteps from "../components/Analysis/ProgressSteps";
import ReportHeader from "../components/AnalysisReport/ReportHeader";
import ScoreCircle from "../components/AnalysisReport/ScoreCircle";
import ReportSection from "../components/AnalysisReport/ReportSection";
import RecommendationCard from "../components/AnalysisReport/RecommendationCard";
import GrowthCard from "../components/AnalysisReport/GrowthCard";
import "./AnalysisReport.css";

const AnalysisReport = () => {
  const business = JSON.parse(localStorage.getItem("businessData")) || {
    businessName: "minfvgbjkps",
  };

  const report = {
    score: 62,

    strengths: [
      {
        title: "Established Customer Base",
        description:
          "You have built a loyal customer base that trusts your products and services, providing a strong foundation for digital expansion.",
      },
      {
        title: "Clear Value Proposition",
        description:
          "Your business offers distinct value compared to competitors, making it easier to position and market effectively online.",
      },
      {
        title: "Operational Experience",
        description:
          "Years of operational experience give you deep industry knowledge that can be leveraged for content marketing and thought leadership.",
      },
      {
        title: "Word-of-Mouth Referrals",
        description:
          "Strong organic referrals indicate high customer satisfaction, which can be amplified through digital review platforms and social proof.",
      },
    ],

    weakness: [
      {
        title: "Limited Online Visibility",
        description:
          "Your digital footprint is minimal, making it difficult for potential customers to find you through search engines or social media.",
      },
      {
        title: "No SEO Strategy",
        description:
          "Without targeted SEO, you are missing out on high-intent customers actively searching for your products or services.",
      },
      {
        title: "Outdated Web Presence",
        description:
          "Your current website lacks modern design standards, mobile optimization, and conversion-focused elements that drive sales.",
      },
      {
        title: "No Digital Marketing Funnel",
        description:
          "There is no structured system to capture leads, nurture them, and convert them into paying customers online.",
      },
    ],

    website: [
      "Build a modern, responsive website with clear navigation and fast loading speeds",
      "Implement conversion-focused landing pages with compelling CTAs",
      "Add customer testimonials and case studies to build social proof",
      "Integrate live chat or AI chatbot for instant customer support",
      "Ensure mobile-first design as 70%+ of traffic comes from mobile devices",
      "Add clear contact forms and click-to-call buttons on every page",
    ],

    seo: [
      "Conduct comprehensive keyword research to identify high-value search terms",
      "Optimize on-page elements: title tags, meta descriptions, header tags, and image alt text",
      "Create a Google Business Profile and optimize it with photos, reviews, and posts",
      "Build local citations and directory listings to improve local SEO rankings",
      "Start a blog/weekly content targeting long-tail keywords in your industry",
      "Implement schema markup for rich snippets in search results",
    ],

    marketing: [
      "Launch targeted Google Ads campaigns focusing on high-intent keywords",
      "Set up email marketing automation for lead nurturing and customer retention",
      "Create a lead magnet (e-book, checklist, or free consultation) to capture emails",
      "Implement retargeting ads to re-engage website visitors who didn't convert",
      "Develop a content marketing calendar with consistent blog posts and social content",
      "Track all campaigns with analytics to measure ROI and optimize performance",
    ],

    social: [
      "Identify 2-3 platforms where your target audience is most active and focus efforts there",
      "Create a consistent posting schedule with a mix of educational, promotional, and engaging content",
      "Run short-form video content (Reels, Shorts, TikTok) to increase reach and engagement",
      "Engage with followers through comments, DMs, and community building activities",
      "Collaborate with micro-influencers in your niche for authentic brand exposure",
      "Run social media ad campaigns with precise audience targeting",
    ],

    growth: [
      {
        title: "E-commerce Integration",
        description:
          "Add online ordering or booking capabilities to capture sales 24/7 even outside business hours.",
        impact: "High",
        effort: "Medium",
      },
      {
        title: "Content Marketing Engine",
        description:
          "Build a content engine that positions your brand as an industry authority and drives organic traffic.",
        impact: "High",
        effort: "Medium",
      },
      {
        title: "Referral Program",
        description:
          "Launch a structured referral program to turn satisfied customers into brand ambassadors.",
        impact: "Medium",
        effort: "Low",
      },
      {
        title: "Marketplace Expansion",
        description:
          "List your products on major marketplaces like Amazon, Etsy, or industry-specific platforms.",
        impact: "High",
        effort: "High",
      },
      {
        title: "AI-Powered Personalization",
        description:
          "Use AI to personalize customer experience, product recommendations, and marketing messages.",
        impact: "High",
        effort: "High",
      },
      {
        title: "Strategic Partnerships",
        description:
          "Partner with complementary businesses to cross-promote and expand your reach.",
        impact: "Medium",
        effort: "Low",
      },
    ],
  };

  return (
    <div className="report-page-wrapper">
      <ProgressSteps currentStep={3} />

      <div className="report-card-container">
        <ReportHeader business={business} />

        <div className="score-card-box">
          <ScoreCircle score={report.score} />
          <p className="score-description">
            Your business has a solid foundation but significant digital growth opportunities are being missed. With targeted improvements, you could see 2-3x growth within 6-12 months.
          </p>
        </div>

        <div className="two-column-grid">
          <ReportSection
            title="Key Strengths"
            items={report.strengths}
            icon={<FiThumbsUp />}
            type="strengths"
          />
          <ReportSection
            title="Areas for Improvement"
            items={report.weakness}
            icon={<FiAlertTriangle />}
            type="weakness"
          />
        </div>

        <div className="two-column-grid">
          <RecommendationCard
            title="Website Recommendations"
            items={report.website}
            icon={<FiGlobe />}
          />
          <RecommendationCard
            title="SEO Suggestions"
            items={report.seo}
            icon={<FiSearch />}
          />
          <RecommendationCard
            title="Digital Marketing Suggestions"
            items={report.marketing}
            // icon={<FiMegaphone />}
          />
          <RecommendationCard
            title="Social Media Suggestions"
            items={report.social}
            icon={<FiSmartphone />}
          />
        </div>

        <div className="growth-opportunities-section">
          <h2 className="section-main-heading">
            <FiTrendingUp className="heading-icon" /> Growth Opportunities
          </h2>
          <div className="growth-grid-container">
            {report.growth.map((item) => (
              <GrowthCard key={item.title} data={item} />
            ))}
          </div>
        </div>

        <div className="cta-action-box">
          <p className="cta-subtext">Want a personalized consultation based on this report?</p>
          <div className="cta-button-group">
            <button className="btn-primary">
              <FiCalendar /> Schedule Free Consultation
            </button>
            <button className="btn-outline">
              <FiDownload /> Download PDF Report
            </button>
          </div>
          <div className="cta-secondary-link">
            <button className="btn-text-pill">
              <FiRefreshCw /> Analyze Another Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
