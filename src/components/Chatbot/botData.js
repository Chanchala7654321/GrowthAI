export const getCurrentFormattedTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strHours = hours < 10 ? "0" + hours : hours;
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${strHours}:${strMinutes} ${ampm}`;
};

export const getBotResponse = (questionText) => {
  const q = questionText.toLowerCase().trim();

  if (
    q.includes("basic website") ||
    q.includes("website cost") ||
    q.includes("website price") ||
    q.includes("plan fits")
  ) {
    return {
      text: "Building a professional website is one of the best investments you can make for your business. Here's what we recommend:",
      sections: [
        {
          title: "Our Website Development Process:",
          items: [
            "1. Discovery & Planning — We understand your business goals, target audience, and competitors",
            "2. UI/UX Design — Custom, mobile-first designs that reflect your brand identity",
            "3. Development — Clean, fast-loading code built with modern frameworks",
            "4. SEO Setup — On-page SEO optimized from day one",
            "5. Launch & Support — Smooth deployment with ongoing maintenance",
          ],
        },
        {
          highlight:
            "Pricing starts at just ₹9,999 for a Basic Website and goes up to ₹59,999 for a Premium package with unlimited pages and custom integrations.",
        },
        {
          text: "Would you like me to help you figure out which plan fits your needs best?",
        },
      ],
    };
  }

  if (q.includes("seo package") || q.includes("seo")) {
    return {
      text: "SEO is how your business gets found on Google — and we take it seriously. Here's what our SEO package covers:",
      sections: [
        {
          title: "SEO Package — ₹7,999/month",
        },
        {
          title: "What's Included:",
          items: [
            "- Keyword Research — Find the exact terms your customers are searching for",
            "- On-Page SEO — Optimize titles, meta descriptions, headings, and content",
            "- Technical SEO — Fix site speed, mobile issues, XML sitemaps, and structured data",
            "- Link Building — Quality backlinks from relevant, authoritative websites",
            "- Local SEO — Google Business Profile optimization for local visibility",
            "- Monthly Reports — Track rankings, traffic, and conversions",
          ],
        },
        {
          title: "Realistic Timeline:",
          items: [
            "- Month 1-2: Technical fixes, keyword implementation",
            "- Month 3-4: Ranking improvements begin",
            "- Month 6+: Significant organic traffic growth",
          ],
        },
        {
          highlight:
            "Most clients see a 30-50% increase in organic traffic within 6 months. Want an SEO audit of your current website?",
        },
      ],
    };
  }

  if (
    q.includes("digital marketing") ||
    q.includes("marketing package") ||
    q.includes("ads")
  ) {
    return {
      text: "Digital marketing is where we drive real results for your business. Here's a breakdown:",
      sections: [
        {
          title: "Digital Marketing Package — ₹12,999/month",
        },
        {
          title: "What You Get:",
          subSections: [
            {
              heading: "1. Social Media Marketing",
              lines: [
                "• 12-15 posts per month across 2 platforms",
                "• Custom graphics and copywriting",
                "• Hashtag strategy and engagement management",
              ],
            },
            {
              heading: "2. Google Ads Management",
              lines: [
                "• Campaign setup and optimization",
                "• Keyword bidding strategy",
                "• A/B testing for ad copy and landing pages",
              ],
            },
            {
              heading: "3. Email Marketing",
              lines: [
                "• Newsletter template design",
                "• Automated welcome and follow-up sequences",
                "• List segmentation and analytics",
              ],
            },
            {
              heading: "4. Analytics & Reporting",
              lines: [
                "• Monthly performance dashboard",
                "• Conversion tracking",
                "• ROI analysis",
              ],
            },
          ],
        },
        {
          title: "Average Results (First 3 Months):",
          items: [
            "- 40% increase in website traffic",
            "- 25% improvement in conversion rates",
            "- 3-5x ROAS (Return on Ad Spend)",
          ],
        },
        {
          text: "Would you like to know which channel would work best for your industry?",
        },
      ],
    };
  }

  if (
    q.includes("referral") ||
    q.includes("referral program") ||
    q.includes("earn")
  ) {
    return {
      text: "Our Referral Partner Program is simple: earn ₹1,000 for every successful referral!",
      sections: [
        {
          title: "How It Works:",
          items: [
            "1. Sign Up — Register as a referral partner (it's free!)",
            "2. Share — Get your unique referral link and share it with business owners who need a website or digital marketing",
            "3. Earn — When they sign up for any of our services, you earn ₹1,000 per referral",
          ],
        },
        {
          title: "Key Benefits:",
          items: [
            "- No cap on earnings — Refer 10 clients, earn ₹10,000. Refer 50, earn ₹50,000!",
            "- Quick payouts — Payments processed within 7 days of client confirmation",
            "- No cold calling — Just share with your network",
            "- Dedicated support — We handle all sales conversations",
          ],
        },
        {
          title: "Who Can Join?",
          items: [
            "- Freelancers and consultants",
            "- Business coaches and mentors",
            "- Anyone with a network of business owners",
            "- Existing clients who love our work",
          ],
        },
        {
          text: "Want to sign up? Head over to our Referral Partner page to register!",
        },
      ],
    };
  }

  if (
    q.includes("mobile") ||
    q.includes("mobile-friendly") ||
    q.includes("responsive")
  ) {
    return {
      text: "Building a professional website is one of the best investments you can make for your business. Here's what we recommend:",
      sections: [
        {
          title: "Our Website Development Process:",
          items: [
            "1. Discovery & Planning — We understand your business goals, target audience, and competitors",
            "2. UI/UX Design — Custom, mobile-first designs that reflect your brand identity",
            "3. Development — Clean, fast-loading code built with modern frameworks",
            "4. SEO Setup — On-page SEO optimized from day one",
            "5. Launch & Support — Smooth deployment with ongoing maintenance",
          ],
        },
        {
          highlight:
            "Pricing starts at just ₹9,999 for a Basic Website and goes up to ₹59,999 for a Premium package with unlimited pages and custom integrations.",
        },
        {
          text: "Would you like me to help you figure out which plan fits your needs best?",
        },
      ],
    };
  }

  if (
    q.includes("trend") ||
    q.includes("market trends") ||
    q.includes("latest")
  ) {
    return {
      text: "Staying ahead of trends gives you a serious competitive edge. Here's what's hot right now:",
      sections: [
        {
          title: "Website Trends:",
          items: [
            "- AI-powered chatbots (like me!) for 24/7 customer support",
            "- Dark mode and minimalist design",
            "- Micro-interactions and scroll-triggered animations",
            "- Voice search optimization",
            "- Core Web Vitals and page speed as ranking factors",
          ],
        },
        {
          title: "SEO Trends:",
          items: [
            "- Google's SGE (Search Generative Experience) is changing how results appear",
            "- E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) matters more than ever",
            "- Video SEO is exploding with YouTube Shorts and Instagram Reels",
            "- Zero-click searches are rising — featured snippets are gold",
          ],
        },
        {
          title: "Marketing Trends:",
          items: [
            "- Short-form video dominates (Reels, Shorts, TikTok)",
            "- Personalization at scale using AI",
            "- Community-led growth over traditional ads",
            "- WhatsApp Business API for direct customer communication",
          ],
        },
        {
          text: "Check out our Market Trends page for a regularly updated deep dive into each of these. Which trend interests you most?",
        },
      ],
    };
  }

  return {
    text: "Thank you for reaching out! I'm here to help you grow your business. You can ask me about our website development packages, SEO strategies, digital marketing campaigns, or our referral program.",
    sections: [
      {
        text: "Feel free to select one of the suggested questions below or ask anything specific about your project needs!",
      },
    ],
  };
};

export const initialMessages = [];
