import { useState } from 'react';
import { FaRobot, FaCode, FaGraduationCap, FaPalette } from 'react-icons/fa';

interface PersonalProfileProps {
  onClose: () => void;
}

export function PersonalProfile({ onClose }: PersonalProfileProps) {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const translations = {
    en: {
      greeting: "Hello, I am",
      role: "AI Explorer",
      tagline: "Passionate about exploring the possibilities of AI applications",
      intro: "I am an explorer passionate about artificial intelligence, dedicated to applying AI technology to education, creation, and daily life. Through continuous learning and practice, I hope to use the power of AI to create more valuable content and tools.",
      aboutTitle: "About Website",
      aboutSubtitle: "Exploring AI Possibilities",
      aboutDesc: "This website started with a few lingering questions: Generative AI is so powerful, how can it be adapted to personalized needs? In the AI era, is programming and creation really accessible to everyone? How to use AI to help children learn? Through continuous practice and exploration, I try to find answers to these questions.",
      insightsTitle: "Insights in Practice",
      insightsList: [
        "Reject lying flat, start thinking",
        "Don't procrastinate, act immediately",
        "Fear no trial and error, learn from mistakes",
        "Believe in hard work, success will come"
      ],
      techStackTitle: "Tech Stack & Tools",
      techStackLabels: {
        frontend: "Frontend",
        backend: "Backend",
        content: "Content Generation",
        audio: "Audio Generation",
        code: "Code Generation",
        deploy: "Deployment"
      },
      interestsTitle: "Interests",
      interestsList: [
        { title: "AI", desc: "Exploring AI applications in education, creation, and daily life, focusing on the latest AI trends." },
        { title: "Programming", desc: "Keen on using AI to assist programming, exploring the possibilities of low-code/no-code development." },
        { title: "Edu Innovation", desc: "Researching how to use AI technology to improve the educational experience, making learning more efficient and fun." },
        { title: "Creative Design", desc: "Using AI tools for creative design, exploring the human-machine collaborative creation mode." }
      ],
      footer: "AI Explorer. All rights reserved."
    },
    zh: {
      greeting: "你好，我是",
      role: "AI探索者",
      tagline: "热衷于探索AI应用的各种可能",
      intro: "我是一个对人工智能充满热情的探索者，致力于将AI技术应用于教育、创作和日常生活的各个方面。通过不断学习和实践，我希望能够利用AI的力量创造更有价值的内容和工具。",
      aboutTitle: "关于网站",
      aboutSubtitle: "探索AI的可能性",
      aboutDesc: "这个网站始于几个萦绕心头的问题：生成式AI如此强大，如何让它适配个性化需求？在AI时代，编程与创造是否真的人人可为？如何利用AI帮助孩子学习？通过不断实践和探索，我试图找到这些问题的答案。",
      insightsTitle: "实践中的感悟",
      insightsList: [
        "拒绝躺平，开启思考",
        "不要拖延，立即行动",
        "无惧试错，边错边学",
        "坚信努力，必有所成"
      ],
      techStackTitle: "技术栈与工具",
      techStackLabels: {
        frontend: "前端开发",
        backend: "后端开发",
        content: "内容生成",
        audio: "音频生成",
        code: "代码生成",
        deploy: "网页部署"
      },
      interestsTitle: "兴趣领域",
      interestsList: [
        { title: "人工智能", desc: "探索AI在教育、创作和日常生活中的应用，关注最新的AI技术发展趋势。" },
        { title: "编程开发", desc: "热衷于使用AI辅助编程，探索低代码/无代码开发的可能性。" },
        { title: "教育创新", desc: "研究如何利用AI技术改善教育体验，让学习变得更加高效和有趣。" },
        { title: "创意设计", desc: "使用AI工具进行创意设计，探索人机协作的创作模式。" }
      ],
      footer: "AI Explorer. All rights reserved."
    }
  };

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-gray-900 rounded-2xl shadow-2xl animate-scale-in border border-gray-800">
        
        {/* Sticky Header with Controls */}
        <div className="sticky top-0 right-0 z-50 flex justify-end items-center gap-4 p-6 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          {/* Language Switcher */}
          <div className="flex bg-gray-800 rounded-full p-1 border border-gray-700">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                lang === 'en' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                lang === 'zh' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              中文
            </button>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="pb-12">
          {/* Hero Section */}
          <section className="relative pt-10 pb-16 overflow-hidden px-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 z-0"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                  <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                    <img 
                      src="/alex.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full border-4 border-gray-900"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t.role}</span>
                  </h1>
                  <p className="text-lg text-blue-200 font-medium">
                    {t.tagline}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {t.intro}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card: About Website */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors shadow-lg">
                <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                  <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                  {t.aboutTitle}
                </h2>
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-blue-200">{t.aboutSubtitle}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t.aboutDesc}
                  </p>
                </div>
              </div>

              {/* Card: Insights */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors shadow-lg">
                <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                  <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
                  {t.insightsTitle}
                </h2>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {t.insightsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card: Tech Stack */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-colors shadow-lg">
              <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
                {t.techStackTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: t.techStackLabels.frontend, val: "React, TypeScript, Tailwind CSS", color: "cyan" },
                  { label: t.techStackLabels.backend, val: "Cloudflare Workers (Serverless)", color: "orange" },
                  { label: t.techStackLabels.content, val: "DeepSeek/Kimi API", color: "blue" },
                  { label: t.techStackLabels.code, val: "Trae + Gemini-3-Pro-Preview", color: "purple" },
                  { label: t.techStackLabels.deploy, val: "Github + Cloudflare", color: "pink" },
                ].map((item) => (
                  <div key={item.label} className="group">
                    <div className={`text-${item.color}-400 text-xs font-bold mb-1 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity`}>
                      {item.label}
                    </div>
                    <div className="text-white font-semibold text-base border-l-2 border-gray-700 pl-3 group-hover:border-gray-500 transition-colors">
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="px-8 pt-10">
            <h2 className="text-2xl font-bold text-center mb-8">{t.interestsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.interestsList.map((interest, index) => {
                const icons = [FaRobot, FaCode, FaGraduationCap, FaPalette];
                const Icon = icons[index];
                return (
                  <div key={interest.title} className="p-5 rounded-xl bg-gray-800/50 hover:bg-gray-750 transition-colors border border-gray-800 hover:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-blue-400" />
                      <h3 className="text-lg font-bold text-white">{interest.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{interest.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
