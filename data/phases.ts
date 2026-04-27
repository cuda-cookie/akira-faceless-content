export interface Lesson {
  name: string;
  status: 'complete' | 'planned';
  type: string;
  lang: string;
  path?: string;
}

export interface Phase {
  id: number;
  name: string;
  status: 'complete' | 'planned';
  desc: string;
  kanji: string;
  lessons: Lesson[];
}

export const PHASES: Phase[] = [
  {
    id: 0,
    name: "Welcome & Setup",
    status: "complete",
    desc: "🚀 Get started with your faceless video empire",
    kanji: "準備",
    lessons: [
      { name: "Welcome", status: "complete", type: "Learn", lang: "—", path: "phases/00-welcome-setup/01-welcome" },
    ]
  },
  {
    id: 1,
    name: "Foundations",
    status: "complete",
    desc: "📚 Learn what faceless videos are and why they work",
    kanji: "基礎",
    lessons: [
      { name: "What is Faceless Video", status: "complete", type: "Learn", lang: "—", path: "phases/01-foundations/01-what-is-faceless-video" },
      { name: "Why It Works", status: "complete", type: "Learn", lang: "—", path: "phases/01-foundations/02-why-it-works" },
      { name: "Economics", status: "complete", type: "Learn", lang: "—", path: "phases/01-foundations/03-economics" },
      { name: "Choosing Your Niche", status: "complete", type: "Build", lang: "—", path: "phases/01-foundations/04-choosing-niche" },
      { name: "Market Research", status: "complete", type: "Build", lang: "—", path: "phases/01-foundations/05-market-research" },
      { name: "Channel Setup", status: "complete", type: "Build", lang: "—", path: "phases/01-foundations/06-channel-setup" },
    ]
  },
  {
    id: 2,
    name: "Tools & Automation",
    status: "complete",
    desc: "🛠️ Master the platforms and tools for video creation",
    kanji: "ツール",
    lessons: [
      { name: "Dashboard Overview", status: "complete", type: "Learn", lang: "—", path: "phases/02-tools/01-dashboard" },
      { name: "Faceless Generator", status: "complete", type: "Build", lang: "—", path: "phases/02-tools/02-faceless-generator" },
      { name: "AI Scripts", status: "complete", type: "Learn", lang: "—", path: "phases/02-tools/03-ai-scripts" },
      { name: "Editing Basics", status: "complete", type: "Build", lang: "—", path: "phases/02-tools/04-editing" },
      { name: "Character Consistency", status: "complete", type: "Learn", lang: "—", path: "phases/02-tools/05-character-consistency" },
      { name: "Bulk Scheduler", status: "complete", type: "Build", lang: "—", path: "phases/02-tools/06-bulk-scheduler" },
      { name: "Idea Discovery", status: "complete", type: "Learn", lang: "—", path: "phases/02-tools/07-idea-discovery" },
      { name: "Advanced Features", status: "complete", type: "Build", lang: "—", path: "phases/02-tools/08-advanced-features" },
    ]
  },
  {
    id: 3,
    name: "Content Strategy",
    status: "complete",
    desc: "📝 Create compelling content that converts",
    kanji: "戦略",
    lessons: [
      { name: "5-Minute System", status: "complete", type: "Learn", lang: "—", path: "phases/03-content/01-5-minute-system" },
      { name: "Script Writing", status: "complete", type: "Build", lang: "—", path: "phases/03-content/02-script-writing" },
      { name: "Thumbnails", status: "complete", type: "Learn", lang: "—", path: "phases/03-content/03-thumbnails" },
      { name: "Titles & CTAs", status: "complete", type: "Build", lang: "—", path: "phases/03-content/04-titles" },
      { name: "Content Repurposing", status: "complete", type: "Learn", lang: "—", path: "phases/03-content/05-repurposing" },
      { name: "Content Calendar", status: "complete", type: "Build", lang: "—", path: "phases/03-content/06-content-calendar" },
      { name: "Quality vs Quantity", status: "complete", type: "Learn", lang: "—", path: "phases/03-content/07-quality-quantity" },
    ]
  },
  {
    id: 4,
    name: "YouTube Mastery",
    status: "complete",
    desc: "🎥 Dominate YouTube with faceless videos",
    kanji: "ユーチューブ",
    lessons: [
      { name: "YouTube Requirements", status: "complete", type: "Learn", lang: "—", path: "phases/04-youtube/01-youtube-requirements" },
      { name: "Monetization Strategy", status: "complete", type: "Learn", lang: "—", path: "phases/04-youtube/02-monetization-strategy" },
      { name: "Watch Time Hacks", status: "complete", type: "Learn", lang: "—", path: "phases/04-youtube/03-watch-time" },
      { name: "Shorts vs Long", status: "complete", type: "Learn", lang: "—", path: "phases/04-youtube/04-shorts-vs-long" },
      { name: "Multi-Channel", status: "complete", type: "Build", lang: "—", path: "phases/04-youtube/05-multi-channel" },
      { name: "Platform Requirements", status: "complete", type: "Learn", lang: "—", path: "phases/04-youtube/06-platform-requirements" },
      { name: "Getting Approved", status: "complete", type: "Build", lang: "—", path: "phases/04-youtube/07-getting-approved" },
    ]
  },
  {
    id: 5,
    name: "Monetization",
    status: "complete",
    desc: "💰 Turn views into revenue streams",
    kanji: "収益",
    lessons: [
      { name: "Revenue Stack", status: "complete", type: "Learn", lang: "—", path: "phases/05-monetization/01-revenue-stack" },
      { name: "AdSense", status: "complete", type: "Learn", lang: "—", path: "phases/05-monetization/02-adsense" },
      { name: "Affiliate Marketing", status: "complete", type: "Learn", lang: "—", path: "phases/05-monetization/03-affiliate" },
      { name: "YouTube Extras", status: "complete", type: "Learn", lang: "—", path: "phases/05-monetization/04-youtube-extras" },
      { name: "Brand Deals", status: "complete", type: "Build", lang: "—", path: "phases/05-monetization/05-brand-deals" },
      { name: "Multi-Platform Revenue", status: "complete", type: "Learn", lang: "—", path: "phases/05-monetization/06-multi-platform" },
      { name: "Scaling Revenue", status: "complete", type: "Build", lang: "—", path: "phases/05-monetization/07-scaling" },
    ]
  },
  {
    id: 6,
    name: "Growth & Optimization",
    status: "complete",
    desc: "📈 Scale your audience and optimize performance",
    kanji: "成長",
    lessons: [
      { name: "Consistency", status: "complete", type: "Learn", lang: "—", path: "phases/06-growth/01-consistency" },
      { name: "Multi-Platform Strategy", status: "complete", type: "Learn", lang: "—", path: "phases/06-growth/02-multi-platform" },
      { name: "Repurposing Mastery", status: "complete", type: "Build", lang: "—", path: "phases/06-growth/03-repurposing" },
      { name: "Community Building", status: "complete", type: "Learn", lang: "—", path: "phases/06-growth/04-community" },
      { name: "SEO & Discovery", status: "complete", type: "Learn", lang: "—", path: "phases/06-growth/05-seo" },
      { name: "A/B Testing", status: "complete", type: "Build", lang: "—", path: "phases/06-growth/06-ab-testing" },
      { name: "Analytics", status: "complete", type: "Learn", lang: "—", path: "phases/06-growth/07-analytics" },
    ]
  },
  {
    id: 7,
    name: "Advanced Scaling",
    status: "complete",
    desc: "🚀 Build your faceless empire with teams",
    kanji: "拡大",
    lessons: [
      { name: "Multi-Channel Empire", status: "complete", type: "Learn", lang: "—", path: "phases/07-scaling/01-multi-channel" },
      { name: "Niche Expansion", status: "complete", type: "Learn", lang: "—", path: "phases/07-scaling/02-niche-expansion" },
      { name: "Team Building", status: "complete", type: "Build", lang: "—", path: "phases/07-scaling/03-team-building" },
      { name: "Automation Systems", status: "complete", type: "Build", lang: "—", path: "phases/07-scaling/04-automation" },
      { name: "Scaling Strategy", status: "complete", type: "Learn", lang: "—", path: "phases/07-scaling/05-scaling" },
      { name: "Building an Empire", status: "complete", type: "Build", lang: "—", path: "phases/07-scaling/06-empire" },
    ]
  },
  {
    id: 8,
    name: "Platform Guides",
    status: "complete",
    desc: "📱 Master each platform's unique requirements",
    kanji: "プラット",
    lessons: [
      { name: "YouTube Mastery", status: "complete", type: "Learn", lang: "—", path: "phases/08-platforms/01-youtube" },
      { name: "TikTok Strategy", status: "complete", type: "Learn", lang: "—", path: "phases/08-platforms/02-tiktok" },
      { name: "Instagram Reels", status: "complete", type: "Learn", lang: "—", path: "phases/08-platforms/03-instagram" },
      { name: "Facebook Videos", status: "complete", type: "Learn", lang: "—", path: "phases/08-platforms/04-facebook" },
      { name: "Cross-Platform Strategy", status: "complete", type: "Build", lang: "—", path: "phases/08-platforms/05-cross-platform" },
      { name: "Content Adaptation", status: "complete", type: "Build", lang: "—", path: "phases/08-platforms/06-adaptation" },
    ]
  },
  {
    id: 9,
    name: "Troubleshooting",
    status: "complete",
    desc: "🔧 Solve common problems and optimize performance",
    kanji: "解決",
    lessons: [
      { name: "Common Issues", status: "complete", type: "Learn", lang: "—", path: "phases/09-troubleshooting/01-common-issues" },
      { name: "Video Credits", status: "complete", type: "Learn", lang: "—", path: "phases/09-troubleshooting/02-credits" },
      { name: "Performance Optimization", status: "complete", type: "Learn", lang: "—", path: "phases/09-troubleshooting/03-performance" },
      { name: "Quality Control", status: "complete", type: "Learn", lang: "—", path: "phases/09-troubleshooting/04-quality" },
      { name: "Staying Updated", status: "complete", type: "Learn", lang: "—", path: "phases/09-troubleshooting/05-updates" },
      { name: "Advanced Tips", status: "complete", type: "Build", lang: "—", path: "phases/09-troubleshooting/06-advanced-tips" },
    ]
  },
  {
    id: 10,
    name: "Mastery & Beyond",
    status: "complete",
    desc: "🏆 Scale to a full business and sustainable growth",
    kanji: "完成",
    lessons: [
      { name: "Hobby to Business", status: "complete", type: "Learn", lang: "—", path: "phases/10-mastery/01-hobby-to-business" },
      { name: "Legal & Tax", status: "complete", type: "Learn", lang: "—", path: "phases/10-mastery/02-legal-tax" },
      { name: "Brand Building", status: "complete", type: "Build", lang: "—", path: "phases/10-mastery/03-brand-building" },
      { name: "Long-term Strategy", status: "complete", type: "Learn", lang: "—", path: "phases/10-mastery/04-long-term" },
      { name: "Exit Strategies", status: "complete", type: "Learn", lang: "—", path: "phases/10-mastery/05-exit-strategies" },
      { name: "Next Steps", status: "complete", type: "Build", lang: "—", path: "phases/10-mastery/06-next-steps" },
    ]
  },
];

export function getTotalLessons() {
  return PHASES.reduce((sum, p) => sum + p.lessons.length, 0);
}
