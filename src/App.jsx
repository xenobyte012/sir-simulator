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
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Disease Spread Simulator
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <Controls onRun={runSimulation} />
        
        {data.length > 0 && <Graph data={data} />}
      </div>

      <div className="mt-4">
        <ModelInfo type={type} />
      </div>
    </div>
  );
}

export default App;