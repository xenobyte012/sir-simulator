import { useState } from "react";

function Controls({ onRun }) {
  const [initial, setInitial] = useState(100);
  const [steps, setSteps] = useState(30);
  const [type, setType] = useState("increasing");

  function handleSubmit() {
    onRun(initial, steps, type);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-5">
      {/* Heading */}
      <div>
        <h2 className="font-bold text-2xl text-gray-800">
          Virus Simulation Settings
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Change values below to predict how infections may spread over time.
        </p>
      </div>

      {/* Initial Population */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Starting Infected Population
        </label>

        <p className="text-xs text-gray-500 mb-2">
          Number of infected people at Day 0
        </p>

        <input
          type="number"
          min="1"
          value={initial}
          onChange={(e) => setInitial(Number(e.target.value))}
          placeholder="Example: 100"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Days */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Number of Days
        </label>

        <p className="text-xs text-gray-500 mb-2">
          How long the simulation should run
        </p>

        <input
          type="number"
          min="1"
          max="365"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
          placeholder="Example: 30"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Model Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Spread Pattern
        </label>

        <p className="text-xs text-gray-500 mb-2">
          Choose how infections change over time
        </p>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="increasing">📈 Fast Growth (Cases increase)</option>

          <option value="decreasing">
            📉 Controlled Spread (Cases decrease)
          </option>

          <option value="oscillating">🌊 Infection Waves (Rise & fall)</option>
        </select>
      </div>

      {/* Explanation box */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <h3 className="font-semibold text-blue-700 mb-2">
          What do these patterns mean?
        </h3>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>📈 Fast Growth → Virus spreads quickly</li>
          <li>📉 Controlled Spread → Prevention reduces infections</li>
          <li>🌊 Waves → Cases rise and fall repeatedly</li>
        </ul>
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-bold
        py-3
        rounded-xl
        transition
        active:scale-95
        shadow-lg
        "
      >
        Run Simulation
      </button>
    </div>
  );
}

export default Controls;
