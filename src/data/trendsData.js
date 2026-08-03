const trendsData = [
    {
      id: 1,
      category: "AI & Technology",
      icon: "ri-robot-line",
      iconBg: "secondary",
      title: "AI-Powered Personalization",
      description:
        "E-commerce platforms use AI to deliver personalized recommendations and dynamic experiences.",
      stat: "+47%",
      statText: "Conversion uplift",
      source: "McKinsey 2026",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 2,
      category: "SEO & Search",
      icon: "ri-speed-up-line",
      iconBg: "secondary",
      title: "Core Web Vitals",
      description:
        "Fast websites continue to rank better in Google search results.",
      stat: "68%",
      statText: "Sites passing CWV",
      source: "Google Search Central",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 3,
      category: "E-commerce",
      icon: "ri-shopping-bag-line",
      iconBg: "secondary",
      title: "Headless Commerce",
      description:
        "Businesses are adopting headless architecture for flexibility and speed.",
      stat: "3.2x",
      statText: "Faster page loads",
      source: "Gartner",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 4,
      category: "SEO & Search",
      icon: "ri-mic-line",
      iconBg: "secondary",
      title: "Voice Search",
      description:
        "Voice search continues to grow through mobile assistants and smart speakers.",
      stat: "27%",
      statText: "Voice searches",
      source: "Statista",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 5,
      category: "Digital Marketing",
      icon: "ri-video-line",
      iconBg: "secondary",
      title: "Short Video Marketing",
      description:
        "Reels, Shorts and TikTok drive higher engagement than static posts.",
      stat: "4.8x",
      statText: "Higher engagement",
      source: "HubSpot",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 6,
      category: "Web Development",
      icon: "ri-moon-line",
      iconBg: "secondary",
      title: "Dark Mode Design",
      description:
        "Users increasingly prefer dark mode and accessibility-focused websites.",
      stat: "82%",
      statText: "Users prefer dark mode",
      source: "Android Survey",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 7,
      category: "Digital Marketing",
      icon: "ri-database-2-line",
      iconBg: "secondary",
      title: "First-Party Data",
      description:
        "Businesses collect first-party customer data after cookie deprecation.",
      stat: "92%",
      statText: "Marketers investing",
      source: "Salesforce",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 8,
      category: "Web Development",
      icon: "ri-smartphone-line",
      iconBg: "secondary",
      title: "Progressive Web Apps",
      description:
        "PWAs provide app-like experiences directly from browsers.",
      stat: "60%",
      statText: "Lower development cost",
      source: "Forrester",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 9,
      category: "SEO & Search",
      icon: "ri-google-line",
      iconBg: "primary",
      title: "Google SGE",
      description:
        "AI-generated search results are changing SEO strategies worldwide.",
      stat: "35%",
      statText: "CTR decrease",
      source: "Search Engine Journal",
      trend: "Emerging",
      level: "High",
    },
  
    {
      id: 10,
      category: "E-commerce",
      icon: "ri-store-2-line",
      iconBg: "secondary",
      title: "Social Commerce",
      description:
        "Shopping directly through Instagram, TikTok and Facebook keeps growing.",
      stat: "₹2.8L Cr",
      statText: "Market size",
      source: "Bain & Company",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 11,
      category: "E-commerce",
      icon: "ri-leaf-line",
      iconBg: "secondary",
      title: "Sustainable Shopping",
      description:
        "Consumers prefer eco-friendly brands and sustainable products.",
      stat: "64%",
      statText: "Prefer sustainable brands",
      source: "NielsenIQ",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 12,
      category: "AI & Technology",
      icon: "ri-article-line",
      iconBg: "secondary",
      title: "AI Content Creation",
      description:
        "Businesses use AI for blogs, SEO content and marketing copy.",
      stat: "3x",
      statText: "Faster production",
      source: "CMI",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 13,
      category: "Web Development",
      icon: "ri-magic-line",
      iconBg: "secondary",
      title: "Motion UI",
      description:
        "Micro interactions improve user experience and engagement.",
      stat: "40%",
      statText: "Higher engagement",
      source: "Awwwards",
      trend: "Rising",
      level: "Low",
    },
  
    {
      id: 14,
      category: "SEO & Search",
      icon: "ri-code-box-line",
      iconBg: "secondary",
      title: "Programmatic SEO",
      description:
        "Dynamic landing pages help businesses capture long-tail traffic.",
      stat: "10x",
      statText: "Traffic growth",
      source: "Ahrefs",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 15,
      category: "AI & Technology",
      icon: "ri-chat-3-line",
      iconBg: "secondary",
      title: "AI Chatbots",
      description:
        "Modern AI assistants qualify leads and improve customer support.",
      stat: "5x",
      statText: "Higher conversions",
      source: "Juniper Research",
      trend: "Rising",
      level: "High",
    },
  
    {
      id: 16,
      category: "Digital Marketing",
      icon: "ri-mail-line",
      iconBg: "secondary",
      title: "Email Automation",
      description:
        "AI-powered email marketing improves personalization and ROI.",
      stat: "29%",
      statText: "ROI improvement",
      source: "Litmus",
      trend: "Rising",
      level: "Medium",
    },
  
    {
      id: 17,
      category: "Web Development",
      icon: "ri-cloud-line",
      iconBg: "primary",
      title: "Serverless Computing",
      description:
        "Edge computing delivers content with lower latency worldwide.",
      stat: "60ms",
      statText: "Average response time",
      source: "Cloudflare",
      trend: "Emerging",
      level: "Medium",
    },
  
    {
      id: 18,
      category: "Digital Marketing",
      icon: "ri-survey-line",
      iconBg: "secondary",
      title: "Interactive Content",
      description:
        "ROI calculators and quizzes generate more qualified leads.",
      stat: "2x",
      statText: "More conversions",
      source: "DemandGen",
      trend: "Rising",
      level: "Medium",
    },
  ];
  
  export default trendsData;