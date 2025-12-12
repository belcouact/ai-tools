import { useState } from 'react';
import { PersonalProfile } from './components/PersonalProfile';
import { FaStream, FaPuzzlePiece, FaBalanceScale, FaMagic, FaGraduationCap, FaGlobe } from 'react-icons/fa';

function App() {
  const [showProfile, setShowProfile] = useState(false);

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
    },
    {
      title: "For Edu",
      apps: [
        {
          id: "english-learning",
          name: "English Learning",
          description: "An interactive English learning tool designed to help you improve your language skills effectively.",
          link: "/apps/english-learning/",
          icon: <FaGraduationCap className="w-8 h-8 text-yellow-500" />
        },
        {
          id: "geogenius",
          name: "GeoGenius AI",
          description: "A tool with 3D earth visualization and AI query capabilities, with location search or a single click anywhere on the map.",
          link: "/apps/geogenius/",
          icon: <FaGlobe className="w-8 h-8 text-cyan-500" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-10 flex flex-col items-center relative">
      
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
                className="w-full h-full rounded-full object-cover border-2 border-gray-900"
              />
            </div>
          </button>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Tools Hub
          </h1>
        </div>
        <p className="text-gray-400 text-lg">My collection of AI-created tools for productivity and fun.</p>
      </header>

      <div className="max-w-5xl w-full mx-auto space-y-16">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-3xl font-bold mb-8 text-gray-200 border-l-4 border-blue-500 pl-4">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.apps.map((app) => (
                <a 
                  key={app.id}
                  href={app.link} 
                  className="group block p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {app.icon}
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">{app.name}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{app.description}</p>
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
        <PersonalProfile onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
}

export default App;
