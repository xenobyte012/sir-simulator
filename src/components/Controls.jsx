import { useState } from "react";

function Controls({ onRun }) {
  const [initial, setInitial] = useState(100);
  const [steps, setSteps] = useState(30);
  const [type, setType] = useState("increasing");

  function handleSubmit() {
    onRun(initial, steps, type);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-5 border border-gray-100">
      <h2 className="font-bold text-xl text-gray-800 border-b pb-2">
        Simulation Parameters
      </h2>

      {/* Initial Infected Labeling */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">
          Initial Infected (T₀)
        </label>
        <p className="text-xs text-gray-500">Starting population at Day 0</p>
        <input
          type="number"
          value={initial}
          onChange={(e) => setInitial(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="e.g. 100"
        />
      </div>

      {/* Time Steps Labeling */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">
          Duration (n steps)
        </label>
        <p className="text-xs text-gray-500">Total days to simulate</p>
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="e.g. 30"
        />
      </div>

      {/* Growth Factor Model Selection */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">
          Growth Factor (Lₙ) Pattern
        </label>
        <p className="text-xs text-gray-500">Mathematical behavior of spread</p>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="increasing">📈 Increasing (Divergent)</option>
          <option value="decreasing">📉 Decreasing (Convergent)</option>
          <option value="oscillating">🌊 Oscillating (Waves)</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl w-full transition-colors shadow-lg active:transform active:scale-95"
      >
        Run Mathematical Model
      </button>
    </div>
  );
}

export default Controls;