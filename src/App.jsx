import { useState } from "react";
import Controls from "./components/Controls";
import Graph from "./components/Graph";
import ModelInfo from "./components/ModelInfo";
import { simulateGrowth } from "./utils/simulate";

function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("increasing");

  function runSimulation(initial, steps, selectedType) {
    const result = simulateGrowth(initial, steps, selectedType);
    setData(result);
    setType(selectedType);
  }

  return (
    // Changed: p-4 for mobile, md:p-8 for tablets/desktops to save screen real estate
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-12 transition-all duration-300">
      
      {/* Header: Centered on mobile for better balance */}
      <header className="max-w-7xl mx-auto mb-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          SIR Model Simulator
        </h1>
        <p className="text-slate-500 font-medium mt-1">
          Dynamic Growth Factor Analysis (Lₙ)
        </p>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* 
            Grid Logic: 
            - 1 column (default/mobile)
            - 2 columns on 'lg' screens (desktops) 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls: Takes full width on mobile, 4/12 width on desktop */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Controls onRun={runSimulation} />
          </div>
          
          {/* Graph: Takes full width on mobile, 8/12 width on desktop */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {data.length > 0 ? (
              <Graph data={data} />
            ) : (
              <div className="bg-white rounded-3xl p-10 h-[300px] md:h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 text-center">
                <span className="text-4xl mb-2">📊</span>
                <p className="font-medium">Adjust parameters and click "Run" to see the projection</p>
              </div>
            )}
          </div>
        </div>

        {/* Model Info: Stays full width below the main tools */}
        <div className="w-full order-3">
          <ModelInfo type={type} />
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-12 pb-6 text-center text-slate-400 text-xs tracking-widest uppercase">
        Eskom Expo for Young Scientists • 2026 Research
      </footer>
    </div>
  );
}

export default App;