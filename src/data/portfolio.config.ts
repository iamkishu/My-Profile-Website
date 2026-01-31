/**
 * ============================================
 * 🎯 PORTFOLIO CONFIGURATION FILE
 * ============================================
 * 
 * Edit this file to update your portfolio content.
 * All changes will reflect immediately on the website.
 * 
 * Tips:
 * - Keep descriptions concise but impactful
 * - Use emojis sparingly for personality
 * - Update the "period" fields to reflect current dates
 * - Add/remove items from arrays as needed
 */

// ============================================
// 👤 PERSONAL INFO
// ============================================
export const personalInfo = {
  name: "Bala Sai Kishore Kadiyam",
  tagline: "Technical Product Owner at SIEMENS | The Engineer Who Switched Sides 🚀",
  description: "I've been on both sides of the sprint board. 8+ years of making industrial IoT products actually work—first as the engineer who debugged at 2 AM, now as the PO who writes user stories devs don't hate. I speak fluent JavaScript AND stakeholder. Azure Certified, GenAI-obsessed, and yes—I actually read the error logs before asking 'did you try restarting it?' 😎",
  email: "kadiyambalasaikishore@gmail.com",
  location: "India",
  availableForWork: true,
};

// ============================================
// 🔗 SOCIAL LINKS
// ============================================
export const socialLinks = [
  { platform: "github", url: "https://github.com/iamkishu", label: "GitHub" },
  { platform: "linkedin", url: "https://www.linkedin.com/in/kadiyam-bala-sai-kishore/", label: "LinkedIn" },
  { platform: "instagram", url: "https://www.instagram.com/i_am_kishu/", label: "Instagram" },
  // Add more: { platform: "medium", url: "...", label: "Medium" },
];

// ============================================
// 💼 EXPERIENCE
// ============================================
// Order: Most recent first
export const experiences = [
  {
    title: "Technical Product Owner",
    company: "Siemens Technology and Services Pvt Ltd",
    period: "Oct 2024 – Present",
    description: "Finally, I get to say 'no' to feature requests with data to back it up! Own three industrial IoT products that make sensors talk to apps via Bluetooth and web. I doubled our device integration speed because I actually know how long things take (former engineer perks). 🎯",
    skills: ["Product Strategy", "Roadmapping", "Agile/Scrum", "Stakeholder Management", "OKRs", "PRDs & User Stories"],
    highlights: [
      "Doubled device integration throughput: 2-3/year → 4-6/year (told you I know what's actually possible)",
      "Shipped 8 Mobile IQ + 3 Web IQ device integrations—and yes, they all work",
      "Leading UX revamp because 'engineer-friendly UI' was an oxymoron",
      "Wrangling global stakeholders across time zones (my Slack never sleeps)",
    ],
  },
  {
    title: "Senior Software Development Engineer",
    company: "Siemens Technology and Services Pvt Ltd",
    period: "Nov 2021 – Sept 2024",
    description: "The era of pure code bliss and too much coffee. Led cloud platforms that connected industrial devices at scale. Built things with MQTT, Kafka, and protocols most people can't pronounce. Got so good they made me lead a team, then made me a PO. Classic bait-and-switch. 💻",
    skills: ["Node.js", "AWS", "Kafka", "MQTT", "CoAP", "Linux", "Shell Scripting", "Web-BLE"],
    highlights: [
      "Team lead on SITRANS hub IQ—cloud platform that doesn't go down at 3 AM (usually)",
      "Designed AWS + Kafka workflows that actually scale (not just 'works on my machine')",
      "Spoke fluent MQTT, HTTPS, and CoAP to industrial devices",
      "Built Web-BLE POCs that almost became patents—innovation is 90% paperwork",
    ],
  },
  {
    title: "Software Engineer",
    company: "Robert Bosch Engineering and Business Solutions",
    period: "Jul 2018 – Oct 2021",
    description: "Backend engineer who tracked shipments, batteries, and occasionally my own sanity. Built systems that talked to RFID guns, GPS devices, and enterprise databases. Learned that 'legacy code' is just code that works but nobody wants to touch. 🔧",
    skills: ["Node.js", "Python", "Azure", "AWS", "IoT Core", "Cosmos DB", "Lambda", "Docker"],
    highlights: [
      "Built backends for everything: web, mobile, RFID handhelds, GPS trackers",
      "Mastered the art of debugging production issues while pretending to be calm",
      "Led deployments that went smoothly (after the 3rd attempt)",
      "Became fluent in Azure and AWS—cloud-bilingual, if you will",
    ],
  },
  {
    title: "Intern",
    company: "Robert Bosch Engineering and Business Solutions",
    period: "Jan 2018 – Jun 2018",
    description: "Where it all began! Built an AR-IoT shipment tracker that was cool enough to demo at Microsoft events. Learned that 'intern work' can actually ship if you ignore everyone saying 'that's too ambitious.' 🌱",
    skills: ["Azure", "Thingworx", "AR", "IoT"],
    highlights: [
      "Built AR-IoT solution that made it to Microsoft Inspire & Ready events",
      "First taste of 'demo gods'—when it works perfectly except during the demo",
    ],
  },
];

// ============================================
// 🚀 PROJECTS
// ============================================
// Your notable projects (as engineer or as PO)
export const projects = [
  {
    title: "SITRANS mobile IQ 📱",
    role: "Technical Product Owner",
    description: "The app that lets you configure industrial sensors via Bluetooth without reading a 500-page manual. I doubled the speed we integrate devices because I speak both 'stakeholder' and 'git push'.",
    skills: ["Product Strategy", "Bluetooth", "Mobile Apps", "IoT", "Agile"],
    metrics: "8 devices shipped, 2x faster integration (math checks out)",
    link: "https://www.siemens.com/global/en/products/automation/process-instrumentation/digitalization/sitrans-mobile-iq.html",
  },
  {
    title: "SITRANS web IQ 🌐",
    role: "Technical Product Owner",
    description: "Web platform for sensor configuration that doesn't look like it was designed in 2003. Leading a UX overhaul because 'functional but ugly' wasn't cutting it anymore.",
    skills: ["Web Platform", "UX Design", "IoT", "Stakeholder Management"],
    metrics: "3 devices integrated, infinite complaints avoided",
    link: "",
  },
  {
    title: "SITRANS hub IQ ☁️",
    role: "Team Lead",
    description: "Cloud platform that onboards devices, pushes firmware, and streams data—basically Spotify for industrial sensors. Built it to scale, and it actually does.",
    skills: ["AWS", "Kafka", "Node.js", "MQTT", "CoAP", "System Design"],
    metrics: "Enterprise-scale, enterprise-reliable (most of the time)",
    link: "https://developer.siemens.com/sitrans-hub-iq/overview.html",
  },
  {
    title: "SITRANS CC220 Gateway 🔧",
    role: "Senior Software Engineer",
    description: "Linux-based IoT gateway that handles OTA updates, Bluetooth comms, and system automation. Wrote shell scripts that even I can understand 6 months later.",
    skills: ["Linux", "Node.js", "Shell Scripting", "Bluetooth", "IoT"],
    metrics: "Critical infra that doesn't page me at night",
    link: "https://www.siemens.com/global/en/products/automation/process-instrumentation/digitalization/smart-condition-monitoring.html",
  },
  {
    title: "Trac360 📦",
    role: "Software Engineer",
    description: "Backend that tracked shipments across RFID scanners and GPS devices. Built for high-volume telemetry, survived Black Friday traffic spikes.",
    skills: ["Node.js", "Python", "Azure", "IoT Core", "GPS"],
    metrics: "Millions of events processed, zero packages lost (by us)",
    link: "https://www.bosch-softwaretechnologies.com/en/products-and-solutions/products-and-solutions/trac-360/",
  },
  {
    title: "Web-BLE Innovation Lab 💡",
    role: "Innovation Lead",
    description: "Hackathon projects that were so good, legal got involved (for patents, not lawsuits). Proving that 'just a POC' can become 'intellectual property'.",
    skills: ["Web-BLE", "JavaScript", "Innovation", "Prototyping"],
    metrics: "Multiple patent submissions pending",
    link: "",
  },
];

// ============================================
// 🎓 EDUCATION
// ============================================
export const education = [
  {
    degree: "Bachelors of Technology - Honors",
    field: "Electronics and Communications Engineering",
    school: "Lovely Professional University, Punjab",
    year: "2014 - 2018",
    highlights: [
      "9.2 GPA (yes, I also attended classes)",
      "Honors degree—for the overachievers",
    ],
  },
  {
    degree: "High Secondary Certificate",
    field: "Science",
    school: "Narayana Junior College, Tenali",
    year: "2012 - 2014",
    highlights: [
      "97.5%—parents were happy, finally",
    ],
  },
];

// ============================================
// 🏆 ACHIEVEMENTS
// ============================================
export const achievements = [
  {
    title: "Gold Winning Idea – Sensory Saviour System",
    organization: "Internal Siemens Hackathon",
    year: "2022",
    description: "Built something so good, even the judges forgot their poker faces. Gold medal for innovation!",
    icon: "🥇",
  },
  {
    title: "Microsoft Azure Champions Grand Prize",
    organization: "HackerEarth",
    year: "2020",
    description: "Placed 5th, then 1st, then 1st again in a tri-series hackathon. Apparently I level up with each round.",
    icon: "🏆",
  },
  {
    title: "1st Place - BIAL Airport Hackathon",
    organization: "Bangalore International Airport",
    year: "2022",
    description: "Won first place with airport app ideas. My layovers are now tax-deductible (just kidding, probably).",
    icon: "✈️",
  },
  {
    title: "IoT Gamification Showcase @ BCW Germany",
    organization: "BCW Germany",
    year: "2020",
    description: "Demoed IoT Gamification with a Reflex Punching Ball. Yes, I got paid to punch things in Germany.",
    icon: "🎮",
  },
];

// ============================================
// 📜 CERTIFICATIONS
// ============================================
export const certifications = [
  {
    name: "Generative AI for Product Managers",
    issuer: "Coursera",
    year: "2024",
    credentialId: "CMHSLSYC2BYU",
    color: "#8B5CF6",
  },
  {
    name: "AI & LLM Engineering Mastery - GenAI, RAG Complete Guide",
    issuer: "Coursera",
    year: "2024",
    credentialId: "YIJC5GJNOMYI",
    color: "#10B981",
  },
  {
    name: "Retrieval Augmented Generation",
    issuer: "Coursera",
    year: "2025",
    credentialId: "W64QRGAB0A3C",
    color: "#F59E0B",
  },
  {
    name: "70-532: Developing Solutions for Microsoft Azure",
    issuer: "Microsoft",
    year: "2020",
    credentialId: "70-532",
    color: "#0078D4",
  },
  {
    name: "AZ-202: Microsoft Azure Developer Certification Transition",
    issuer: "Microsoft",
    year: "2020",
    credentialId: "AZ-202",
    color: "#0078D4",
  },
];

// ============================================
// 🎮 HOBBIES
// ============================================
export const hobbies = [
  {
    name: "Gym Enthusiast",
    icon: "💪",
    description: "Debugging code by day, lifting weights by evening—gains in both worlds"
  },
  {
    name: "Dancing",
    icon: "💃",
    description: "When the code compiles on first try, you gotta celebrate somehow"
  },
  {
    name: "Movie Buff",
    icon: "🎬",
    description: "Watching sci-fi for 'research purposes' and critiquing tech in every thriller"
  },
  {
    name: "Sports Fanatic",
    icon: "🏸",
    description: "Swimming, badminton, pickleball—anything that gets me away from screens (briefly)"
  },
];

// ============================================
// 💡 INTERESTS
// ============================================
// These appear as tags/chips
export const interests = [
  { name: "Product Strategy", icon: "🎯" },
  { name: "Roadmapping", icon: "🗺️" },
  { name: "User Research", icon: "🔍" },
  { name: "A/B Testing", icon: "🧪" },
  { name: "OKRs & Metrics", icon: "📈" },
  { name: "Cloud Architecture", icon: "☁️" },
  { name: "Prompt Engineering", icon: "✍️" },
  { name: "Design Thinking", icon: "💡" },
  { name: "Agile/Scrum", icon: "🔄" },
  { name: "Stakeholder Management", icon: "🤝" },
  { name: "Generative AI", icon: "🤖" },
  { name: "LLMs & RAG", icon: "🧠" },
  { name: "Agentic AI", icon: "🤝" },
  { name: "IoT & Edge Computing", icon: "📡" },
];

// ============================================
// 🎨 SECTION CONFIGURATION
// ============================================
// Customize section titles and subtitles
export const sectionConfig = {
  experience: {
    title: "Experience",
    subtitle: "From writing code to defining what code to write 📈",
  },
  projects: {
    title: "Projects",
    subtitle: "Things I've built or led (and actually shipped) 🚢",
  },
  education: {
    title: "Education",
    subtitle: "The formal stuff 🎓",
  },
  achievements: {
    title: "Achievements",
    subtitle: "Recognition along the way 🏅",
  },
  certifications: {
    title: "Certifications",
    subtitle: "Proof that I finish what I start 📜",
  },
  hobbies: {
    title: "Hobbies",
    subtitle: "What I do when not in Jira 🎮",
  },
  interests: {
    title: "Interests",
    subtitle: "Topics I geek out about 💡",
  },
  contact: {
    title: "Let's Connect!",
    subtitle: "I speak both tech and business fluently ⚡",
    description: "Whether you want to discuss product strategy, technical architecture, or how to bridge the gap between engineering and product—I'm all ears. Former engineer, current PO, forever curious.",
    ctaText: "Get In Touch 📬",
  },
};

// ============================================
// 🔧 SITE CONFIGURATION
// ============================================
export const siteConfig = {
  title: "Portfolio | Bala Sai Kishore Kadiyam",
  description: "Technical Product Owner at Siemens | 8+ years building IoT & Cloud products | GenAI Enthusiast",
  // Theme colors (affects animated background)
  // You can customize the gradient themes here
};
