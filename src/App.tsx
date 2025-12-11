function App() {
  const categories = [
    {
      title: "For Work",
      apps: [
        {
          id: "gantt",
          name: "Light Gantt",
          description: "A lightweight Gantt chart tool for efficient project management and timeline visualization.",
          link: "/apps/light-gantt/" 
        },
        {
          id: "problem-solver",
          name: "Problem Solver",
          description: "AI-powered assistant to help you break down and solve complex problems systematically.",
          link: "/apps/problem-solver/" 
        }
      ]
    },
    {
      title: "For Fun",
      apps: [
        {
          id: "life-balance",
          name: "Balance of Life",
          description: "An AI tool to explore the balance between conflicting values like 'Past vs Present' or 'Love vs Freedom', offering inspiring quotes to reveal what truly matters.",
          link: "/apps/balance-of-life/" 
        },
        {
          id: "text-animation",
          name: "Text Animation",
          description: "Showcase 3D text animation effects with particles. Customize rotation, speed, particle size, and text to create stunning visuals.",
          link: "/apps/text-animation/" 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-10 flex flex-col items-center">
      <header className="max-w-5xl w-full mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
          AI Tools Hub
        </h1>
        <p className="text-gray-400 text-lg">Your centralized portal for productivity and intelligence.</p>
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
                      <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">{app.name}</h3>
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
        &copy; {new Date().getFullYear()} AI Tools Created with Gemini-3-Pro-Preview by Alex Luo.
      </footer>
    </div>
  );
}

export default App;
