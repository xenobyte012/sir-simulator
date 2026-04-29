import { useState } from "react";

function Controls({ onRun }) {
  const [initial, setInitial] = useState(100);
  const [steps, setSteps] = useState(30);
  const [type, setType] = useState("increasing");

  function handleSubmit() {
    onRun(initial, steps, type);
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
      <h2 className="font-bold text-lg">Simulation Controls</h2>

      <input
        type="number"
        value={initial}
        onChange={(e) => setInitial(Number(e.target.value))}
        className="border p-2 w-full"
        placeholder="Initial Infected"
      />

      <input
        type="number"
        value={steps}
        onChange={(e) => setSteps(Number(e.target.value))}
        className="border p-2 w-full"
        placeholder="Time Steps"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="increasing">Increasing</option>
        <option value="decreasing">Decreasing</option>
        <option value="oscillating">Oscillating</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full"
      >
        Run Simulation
      </button>
    </div>
  );
}

export default Controls;