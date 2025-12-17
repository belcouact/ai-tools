import { useState } from 'react';
import { PersonalProfile } from './components/PersonalProfile';
import { FaStream, FaPuzzlePiece, FaBalanceScale, FaMagic, FaGraduationCap, FaGlobe, FaTools, FaRocket, FaPalette, FaSun, FaMoon, FaCoffee, FaChartLine } from 'react-icons/fa';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light' | 'sepia'>('light');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

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

  const categories = [
    {
      title: "For Work",
      apps: [
        {
          id: "gantt",
          name: "Light Gantt",
          description: "A lightweight Gantt chart tool for efficient project management and timeline visualization.",
          link: "/apps/light-gantt/",
          icon: <FaStream className="w-8 h-8 text-blue-500" />
        },        
        {
          id: "a3-bowler",
          name: "a3-bowler",
          description: "A performance tracking and problem-solving application designed to help teams monitor metrics and systematically resolve issues using the A3 methodology.",
          link: "/apps/a3-bowler/",
          icon: <FaChartLine className="w-8 h-8 text-teal-500" />
        },
        {
          id: "problem-solver",
          name: "Problem Solver",
          description: "AI-powered assistant to help you solve complex problems systematically. Customized for manufacturing related problems.",
          link: "/apps/problem-solver/",
          icon: <FaPuzzlePiece className="w-8 h-8 text-purple-500" />
        },
        {
          id: "fault-management",
          name: "Workshop Fault Management",
          description: "Managing machine fault data, using AI to analyze fault and suggest repairing ideas.",
          link: "/apps/fault-management/",
          icon: <FaTools className="w-8 h-8 text-orange-500" />
        }
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
          icon: <FaBalanceScale className="w-8 h-8 text-green-500" />
        },
        {
          id: "text-animation",
          name: "Text Animation",
          description: "Showcase 3D text animation effects with particles. Customize rotation, speed, particle size, and text to create stunning visuals.",
          link: "/apps/text-animation/",
          icon: <FaMagic className="w-8 h-8 text-pink-500" />
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
          icon: <FaGraduationCap className="w-8 h-8 text-yellow-500" />
        },
        {
          id: "geogenius",
          name: "GeoGenius AI",
          description: "A tool with 3D earth visualization and AI query capabilities.",
          link: "/apps/geogenius/",
          icon: <FaGlobe className="w-8 h-8 text-cyan-500" />
        },
        {
          id: "cosmos-explorer",
          name: "Cosmos Explorer",
          description: "Show the cosmos system, allowing you to explore planets and celestial bodies.",
          link: "/apps/cosmos-explorer/",
          icon: <FaRocket className="w-8 h-8 text-indigo-500" />
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen font-sans p-10 flex flex-col items-center relative transition-colors duration-300 ${currentStyle.container}`}>
      
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
      </header>

      <div className="max-w-5xl w-full mx-auto space-y-16">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className={`text-3xl font-bold mb-8 pl-4 border-l-4 ${currentStyle.sectionTitle}`}>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.apps.map((app) => (
                <a 
                  key={app.id}
                  href={app.link} 
                  className={`group block p-8 backdrop-blur-sm rounded-2xl border shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${currentStyle.card}`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {app.icon}
                        <h3 className={`text-2xl font-bold transition-colors ${currentStyle.cardTitle}`}>{app.name}</h3>
                      </div>
                      <p className={`leading-relaxed ${currentStyle.cardText}`}>{app.description}</p>
                    </div>
                    <div className="mt-6 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Launch App <span className="ml-2">&rarr;</span>
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
