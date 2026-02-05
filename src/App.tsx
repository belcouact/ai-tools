import { useMemo, useState } from 'react';
import { PersonalProfile } from './components/PersonalProfile';
import { FaStream, FaBalanceScale, FaMagic, FaGraduationCap, FaGlobe, FaRocket, FaPalette, FaSun, FaMoon, FaCoffee, FaRegListAlt } from 'react-icons/fa';

type BoxIconProps = {
  className?: string;
};

function BoxIcon({ className }: BoxIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 7.5L12 3l7.5 4.5M4.5 7.5L12 12m7.5-4.5L12 12m0 0v9l-7.5-4.5v-9L12 3l7.5 4.5v9L12 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light' | 'sepia'>('light');
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'For Work' | 'For Fun' | 'For Edu'>('All');

  const themeStyles = {
    dark: {
      container: "bg-gray-900 text-white",
      headerTitle: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
      headerText: "text-gray-400",
      sectionTitle: "text-gray-200 border-blue-500",
      card: "bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-blue-500/50",
      cardTitle: "text-gray-100 group-hover:text-blue-400",
      cardText: "text-gray-400",
      footer: "text-gray-500"
    },
    light: {
      container: "bg-gray-50 text-gray-900",
      headerTitle: "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
      headerText: "text-gray-600",
      sectionTitle: "text-gray-800 border-blue-600",
      card: "bg-white border-gray-200 hover:bg-gray-50 hover:border-blue-400",
      cardTitle: "text-gray-900 group-hover:text-blue-600",
      cardText: "text-gray-600",
      footer: "text-gray-400"
    },
    sepia: {
      container: "bg-[#f4ecd8] text-[#433422]",
      headerTitle: "text-[#5b4636]",
      headerText: "text-[#5b4636]/80",
      sectionTitle: "text-[#433422] border-[#8b5e3c]",
      card: "bg-[#e3d5b8]/40 border-[#d0c0a0] hover:bg-[#e3d5b8]/60 hover:border-[#8b5e3c]",
      cardTitle: "text-[#433422] group-hover:text-[#8b5e3c]",
      cardText: "text-[#5b4636]",
      footer: "text-[#8b5e3c]/60"
    }
  };

  const currentStyle = themeStyles[theme];

  const backgroundAccentStyles = {
    dark: "from-blue-500/30 via-purple-500/20 to-transparent",
    light: "from-blue-500/20 via-purple-500/10 to-transparent",
    sepia: "from-[#8b5e3c]/40 via-[#f4ecd8]/10 to-transparent"
  };

  const backgroundAccentBottomStyles = {
    dark: "from-purple-500/20 via-blue-500/10 to-transparent",
    light: "from-purple-500/10 via-blue-500/5 to-transparent",
    sepia: "from-[#8b5e3c]/30 via-[#f4ecd8]/10 to-transparent"
  };

  const backgroundAccent = backgroundAccentStyles[theme];
  const backgroundAccentBottom = backgroundAccentBottomStyles[theme];

  const categories = [
    {
      title: "For Work",
      apps: [
        {
          id: "gantt",
          name: "Light Gantt",
          description: "A lightweight Gantt chart tool for efficient project management and timeline visualization.",
          link: "/apps/light-gantt/",
          icon: <FaStream className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" />
        },        
        {
          id: "a3-bowler",
          name: "A3 Bowler",
          description: "A performance tracking and problem-solving application using the A3 methodology.",
          link: "/apps/a3-bowler/",
          icon: (
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm shadow-blue-500/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-blue-500/40">
              <img
                src="/logo.png"
                alt="A3 Bowler"
                className="w-7 h-7 object-contain"
              />
            </div>
          )
        },
        {
          id: "3d-lab-store",
          name: "Lab Sample Store",
          description: "An online sample store for QA Lab. With quick search function & 3d view.",
          link: "/apps/3d-lab-store",
          icon: (
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-1 group-hover:shadow-blue-500/40">
              <BoxIcon className="w-6 h-6" />
            </div>
          )
        },
        {
          id: "hoshin-matrix",
          name: "Hoshin Matrix",
          description: "An AI empowered strategy planning tool with Hoshin Matrix",
          link: "/apps/hoshin-matrix/",
          icon: (
            <div className="w-8 h-8 grid grid-cols-2 gap-[2px] p-[1px] rounded-md bg-emerald-500/20 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-105">
              <div className="bg-emerald-500 rounded-sm" />
              <div className="bg-emerald-500/70 rounded-sm" />
              <div className="bg-emerald-500/70 rounded-sm" />
              <div className="bg-emerald-500 rounded-sm" />
            </div>
          )
        },
        {
          id: "schenk-db-schema",
          name: "Dr. Schenk's DB Schema",
          description: "A visualization of Dr. Schenk's inspection database schema, with AI as assistant for query geneartion",
          link: "/apps/schenk-db-schema/",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-[10px] font-semibold tracking-wide shadow-sm shadow-emerald-500/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-emerald-400/50">
              DB
            </div>
          )
        },
        {
          id: "survey-gen",
          name: "Generate Survey with AI",
          description: "Experience the power of AI to create, customize, and analyze surveys with ease.",
          link: "/apps/survey-gen/",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-indigo-400/50">
              <FaRegListAlt className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          )
        },
        /*
        {
          id: "problem-solver",
          name: "Problem Solver",
          description: "AI-powered assistant to help you solve complex problems systematically. Customized for manufacturing related problems.",
          link: "/apps/problem-solver/",
          icon: <FaMagic className="w-8 h-8 text-purple-500" />
        },
        */
        /*
        {
          id: "fault-management",
          name: "Workshop Fault Management",
          description: "Managing machine fault data, using AI to analyze fault and suggest repairing ideas.",
          link: "/apps/fault-management/",
          icon: <FaTools className="w-8 h-8 text-orange-500" />
        }
        */
      ]
    },
    {
      title: "For Fun",
      apps: [
        {
          id: "life-balance",
          name: "Balance of Life",
          description: "An AI tool to explore the balance between conflicting values in life, offering inspiring quotes to reveal what truly matters.",
          link: "/apps/balance-of-life/",
          icon: <FaBalanceScale className="w-8 h-8 text-green-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
        },
        {
          id: "text-animation",
          name: "Text Animation",
          description: "Showcase 3D text animation effects with particles. Customize rotation, speed, particle size, and text to create stunning visuals.",
          link: "/apps/text-animation/",
          icon: <FaMagic className="w-8 h-8 text-pink-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
        }
      ]
    },
    {
      title: "For Edu",
      apps: [
        {
          id: "language-learning",
          name: "Language Learning",
          description: "An interactive language learning tool designed to help you improve your language skills effectively.",
          link: "/apps/language-learning/",
          icon: <FaGraduationCap className="w-8 h-8 text-yellow-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
        },
        {
          id: "geogenius",
          name: "GeoGenius AI",
          description: "A tool with 3D earth visualization and AI query capabilities.",
          link: "/apps/geogenius/",
          icon: <FaGlobe className="w-8 h-8 text-cyan-500 transition-transform duration-300 group-hover:rotate-2 group-hover:scale-110" />
        },
        {
          id: "cosmos-explorer",
          name: "Cosmos Explorer",
          description: "Show the cosmos system, allowing you to explore planets and celestial bodies.",
          link: "/apps/cosmos-explorer/",
          icon: <FaRocket className="w-8 h-8 text-indigo-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
        }
      ]
    }
  ];

  const visibleCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories
      .filter((category) => activeCategory === 'All' || category.title === activeCategory)
      .map((category) => ({
        ...category,
        apps: category.apps.filter((app) => {
          if (!query) return true;
          return (
            app.name.toLowerCase().includes(query) ||
            app.description.toLowerCase().includes(query)
          );
        })
      }))
      .filter((category) => category.apps.length > 0);
  }, [activeCategory, categories, searchQuery]);

  return (
    <div className={`min-h-screen font-sans px-4 py-8 sm:p-10 flex flex-col items-center relative transition-colors duration-300 ${currentStyle.container}`}>
      <div
        className={`pointer-events-none absolute inset-x-0 -top-40 h-72 bg-gradient-to-b ${backgroundAccent} blur-3xl opacity-70`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t ${backgroundAccentBottom} blur-3xl opacity-60`}
        aria-hidden="true"
      />
      
      {/* Theme Switcher */}
      <div className="absolute top-6 right-6 z-40">
        <button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="p-3 rounded-full bg-gray-800/20 backdrop-blur-sm border border-current hover:opacity-80 transition-all"
          aria-label="Change Theme"
        >
          <FaPalette className="w-5 h-5" />
        </button>
        
        {showThemeMenu && (
          <div className="absolute right-0 mt-2 w-32 py-2 bg-gray-800 rounded-xl shadow-xl border border-gray-700 animate-scale-in overflow-hidden z-50">
            <button
              onClick={() => { setTheme('light'); setShowThemeMenu(false); }}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${theme === 'light' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              <FaSun className="w-4 h-4" /> Light
            </button>
            <button
              onClick={() => { setTheme('sepia'); setShowThemeMenu(false); }}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${theme === 'sepia' ? 'text-amber-400' : 'text-gray-300'}`}
            >
              <FaCoffee className="w-4 h-4" /> Sepia
            </button>
            <button
              onClick={() => { setTheme('dark'); setShowThemeMenu(false); }}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${theme === 'dark' ? 'text-purple-400' : 'text-gray-300'}`}
            >
              <FaMoon className="w-4 h-4" /> Dark
            </button>
          </div>
        )}
      </div>

      <header className="max-w-5xl w-full mx-auto mb-12 flex flex-col items-center pt-10">
        <div className="flex items-center gap-6 mb-4">
          <button 
            onClick={() => setShowProfile(true)}
            className="flex items-center justify-center rounded-full hover:opacity-90 transition-opacity"
            aria-label="Open Profile"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-lg shadow-blue-500/20">
              <img 
                src="/alex.png" 
                alt="Alex" 
                className={`w-full h-full rounded-full object-cover border-2 ${theme === 'light' ? 'border-white' : 'border-gray-900'}`}
              />
            </div>
          </button>
          <h1 className={`text-5xl font-extrabold ${currentStyle.headerTitle}`}>
            Tools Hub
          </h1>
        </div>
        <p className={`text-lg ${currentStyle.headerText}`}>My collection of AI-created tools for productivity and fun.</p>
        <div className="mt-8 w-full flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search tools by name or purpose"
              className={`w-full rounded-full px-5 py-3 text-sm md:text-base outline-none backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-400/40 focus:ring-offset-0 transition-all ${
                theme === 'dark'
                  ? 'bg-gray-900/60 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-500'
                  : theme === 'sepia'
                  ? 'bg-[#f4ecd8]/60 border border-[#d3c4a1] text-[#433422] placeholder:text-[#8b7355] focus:border-[#8b5e3c]'
                  : 'bg-white/70 border border-gray-300/70 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
              }`}
            />
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs uppercase tracking-wide text-gray-400">
              {searchQuery ? 'Filtering' : 'Discover'}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['All', 'For Work', 'For Fun', 'For Edu'].map((label) => {
              const isActive = activeCategory === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label as typeof activeCategory)}
                  className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold border transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/30'
                      : 'bg-black/5 text-gray-700 border-transparent hover:bg-black/10 hover:text-gray-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="max-w-5xl w-full mx-auto space-y-16">
        {visibleCategories.map((category) => (
          <section key={category.title}>
            <h2 className={`text-3xl font-bold mb-8 pl-4 border-l-4 ${currentStyle.sectionTitle}`}>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.apps.map((app) => (
                <a 
                  key={app.id}
                  href={app.link} 
                  className={`group relative block p-8 backdrop-blur-sm rounded-2xl border shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${currentStyle.card}`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-1px] bg-gradient-to-br from-blue-500/25 via-purple-500/10 to-transparent blur-xl" />
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {app.icon}
                        <h3 className={`text-2xl font-bold tracking-tight transition-colors ${currentStyle.cardTitle}`}>{app.name}</h3>
                      </div>
                      <p className={`leading-relaxed text-sm md:text-base ${currentStyle.cardText}`}>{app.description}</p>
                    </div>
                    <div className="mt-6 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Launch App
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <footer className={`mt-auto pt-20 text-sm ${currentStyle.footer}`}>
        &copy; {new Date().getFullYear()} AI Tools Designed by Alex Luo, Created with Gemini-3-Pro-Preview.
      </footer>

      {/* Personal Profile Overlay */}
      {showProfile && (
        <PersonalProfile onClose={() => setShowProfile(false)} theme={theme} />
      )}
    </div>
  );
}

export default App;
