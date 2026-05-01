const MODEL_DETAILS = {
  increasing: {
    title: "Uncontrolled Divergence",
    color: "text-red-600",
    border: "border-red-200",
    bg: "bg-red-50",
    formula: "L_n = 0.02n", // Linear growth logic
    summary: "Represents a system where the virus outpaces all interventions.",
    scenarios: ["New variants", "Large public gatherings", "High population density"],
    mathNote: "The system is unstable. As n increases, Ln grows linearly, causing the total infections to accelerate beyond exponential limits.",
  },
  decreasing: {
    title: "Convergent Suppression",
    color: "text-green-600",
    border: "border-green-200",
    bg: "bg-green-50",
    formula: "L_n = 1 / (n + 1)", // Fractional decay logic
    summary: "Represents the 'Flattening the Curve' effect through active control.",
    scenarios: ["Mass vaccination", "Strict lockdowns", "Increased public hygiene"],
    mathNote: "The growth factor Ln approaches 0 as n increases. This leads to the system stabilizing (convergence), eventually halting new infections.",
  },
  oscillating: {
    title: "Periodic Oscillation (Waves)",
    color: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    formula: "L_n = 0.1 * sin(n)", // Sine wave logic
    summary: "Simulates the 'tug-of-war' between spread and social behavior.",
    scenarios: ["Seasonal flu cycles", "Policy changes (Opening/Closing schools)", "Holiday travel spikes"],
    mathNote: "The sine function creates periodic cycles. Positive values simulate outbreaks, while negative values simulate temporary recovery phases.",
  },
};

function ModelInfo({ type }) {
  const info = MODEL_DETAILS[type];

  if (!info) return null;

  return (
    <div className={`p-6 rounded-3xl shadow-lg border-2 transition-all duration-500 ${info.border} ${info.bg}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          {/* Section Label: Connects UI to Research Category */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
            Methodological Analysis
          </span>
          <h2 className={`font-black text-2xl tracking-tight ${info.color}`}>
            {info.title}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase">Growth Function:</span>
            <code className="text-xs font-mono bg-white/50 px-2 py-1 rounded border inline-block">
              {info.formula}
            </code>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white ${info.color} shadow-sm border border-current/10`}>
          {type} model
        </span>
      </div>

      {/* Summary Section Label */}
      <div className="mb-4">
        <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Predictive Summary</span>
        <p className="text-gray-800 font-medium leading-relaxed">
          {info.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200/50">
        {/* Real World Applications Label */}
        <div className="space-y-2">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Epidemiological Drivers</h3>
          <ul className="space-y-1">
            {info.scenarios.map((s, i) => (
              <li key={i} className="flex items-center text-sm text-gray-700">
                <span className={`mr-2 h-1.5 w-1.5 rounded-full ${info.color.replace('text', 'bg')}`} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Theoretical Analysis Label */}
        <div className="bg-white/40 p-4 rounded-xl border border-white/60">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Mathematical Behavior</h3>
          <p className="text-xs text-gray-600 italic leading-snug">
            {info.mathNote}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModelInfo;