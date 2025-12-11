import React from 'react';

interface PersonalProfileProps {
  onClose: () => void;
}

export function PersonalProfile({ onClose }: PersonalProfileProps) {
  const interests = [
    {
      title: "人工智能",
      desc: "探索AI在教育、创作和日常生活中的应用，关注最新的AI技术发展趋势。"
    },
    {
      title: "编程开发",
      desc: "热衷于使用AI辅助编程，探索低代码/无代码开发的可能性。"
    },
    {
      title: "教育创新",
      desc: "研究如何利用AI技术改善教育体验，让学习变得更加高效和有趣。"
    },
    {
      title: "创意设计",
      desc: "使用AI工具进行创意设计，探索人机协作的创作模式。"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 text-gray-100 font-sans animate-fade-in">
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 z-0"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                <img 
                  src="/alex.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full border-4 border-gray-900"
                />
              </div>
            </div>
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                你好，我是<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI探索者</span>
              </h1>
              <p className="text-xl text-blue-200 font-medium">
                热衷于探索AI应用的各种可能
              </p>
              <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
                我是一个对人工智能充满热情的探索者，致力于将AI技术应用于教育、创作和日常生活的各个方面。通过不断学习和实践，我希望能够利用AI的力量创造更有价值的内容和工具。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-gray-800/30">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card: About Website */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-colors shadow-lg">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                关于网站
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-200">探索AI的可能性</h3>
                <p className="text-gray-400 leading-relaxed">
                  这个网站始于几个萦绕心头的问题：生成式AI如此强大，如何让它适配个性化需求？在AI时代，编程与创造是否真的人人可为？如何利用AI帮助孩子学习？通过不断实践和探索，我试图找到这些问题的答案。
                </p>
              </div>
            </div>

            {/* Card: Insights */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-colors shadow-lg">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                实践中的感悟
              </h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>拒绝躺平，开启思考</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>不要拖延，立即行动</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>无惧试错，边错边学</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>坚信努力，必有所成</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card: Tech Stack */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-colors shadow-lg">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
              技术栈与工具
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "内容生成", val: "DeepSeek/Kimi API", color: "blue" },
                { label: "代码生成", val: "Trae + Gemini-3-Pro-Preview", color: "purple" },
                { label: "网页部署", val: "Github + Cloudflare", color: "pink" },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className={`text-${item.color}-400 text-xs font-bold mb-2 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {item.label}
                  </div>
                  <div className="text-white font-semibold text-lg border-l-2 border-gray-700 pl-4 group-hover:border-gray-500 transition-colors">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interests */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">兴趣领域</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest) => (
              <div key={interest.title} className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-750 transition-colors border border-gray-800 hover:border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-400">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
