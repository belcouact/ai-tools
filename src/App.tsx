import { useState } from 'react';
import { PersonalProfile } from './components/PersonalProfile';
import { FaStream, FaPuzzlePiece, FaBalanceScale, FaMagic, FaSun, FaMoon, FaCoffee } from 'react-icons/fa';

type Theme = 'light' | 'dark' | 'sepia';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  const themeStyles = {
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      cardHoverBorder: 'hover:border-blue-500/50',
      cardHoverBg: 'hover:bg-gray-50',
      headerText: 'text-gray-800',
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      cardBg: 'bg-gray-800/50',
      cardBorder: 'border-gray-700',
      cardHoverBorder: 'hover:border-blue-500/50',
      cardHoverBg: 'hover:bg-gray-800',
      headerText: 'text-gray-200',
    },
    sepia: {
      bg: 'bg-[#f4ecd8]',
      text: 'text-[#5b4636]',
      textSecondary: 'text-[#8b7355]',
      cardBg: 'bg-[#e8dec0]/60',
      cardBorder: 'border-[#d3c4a1]',
      cardHoverBorder: 'hover:border-[#8b7355]/50',
      cardHoverBg: 'hover:bg-[#e8dec0]',
      headerText: 'text-[#433422]',
    }
  };

  const currentTheme = themeStyles[theme];

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
          id: "problem-solver",
          name: "Problem Solver",
          description: "AI-powered assistant to help you solve complex problems systematically. Customized for manufacturing related problems.",
          link: "/apps/problem-solver/",
          icon: <FaPuzzlePiece className="w-8 h-8 text-purple-500" />
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
    }
  ];

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-sans p-10 flex flex-col items-center relative transition-colors duration-300`}>
      
      <div className="absolute top-6 right-6 flex gap-2 z-10">
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-blue-500 text-white shadow-lg' : `${currentTheme.cardBg} ${currentTheme.textSecondary} hover:text-blue-500`}`}
          title="Light Mode"
        >
          <FaSun className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-blue-500 text-white shadow-lg' : `${currentTheme.cardBg} ${currentTheme.textSecondary} hover:text-blue-500`}`}
          title="Dark Mode"
        >
          <FaMoon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme('sepia')}
          className={`p-2 rounded-full transition-all ${theme === 'sepia' ? 'bg-amber-600 text-white shadow-lg' : `${currentTheme.cardBg} ${currentTheme.textSecondary} hover:text-amber-600`}`}
          title="Sepia Mode"
        >
          <FaCoffee className="w-5 h-5" />
        </button>
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
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Tools Hub
          </h1>
        </div>
        <p className={`${currentTheme.textSecondary} text-lg`}>My collection of AI-created tools for productivity and fun.</p>
      </header>

      <div className="max-w-5xl w-full mx-auto space-y-16">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className={`text-3xl font-bold mb-8 ${currentTheme.headerText} border-l-4 border-blue-500 pl-4`}>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.apps.map((app) => (
                <a 
                  key={app.id}
                  href={app.link} 
                  className={`group block p-8 ${currentTheme.cardBg} backdrop-blur-sm rounded-2xl border ${currentTheme.cardBorder} ${currentTheme.cardHoverBorder} ${currentTheme.cardHoverBg} hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {app.icon}
                        <h3 className={`text-2xl font-bold ${currentTheme.headerText} group-hover:text-blue-500 transition-colors`}>{app.name}</h3>
                      </div>
                      <p className={`${currentTheme.textSecondary} leading-relaxed`}>{app.description}</p>
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
      
      <footer className="mt-auto pt-20 text-gray-500 text-sm">
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
