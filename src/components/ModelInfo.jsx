const MODEL_DETAILS = {
  increasing: {
    title: "Uncontrolled Divergence",
    color: "text-red-600",
    border: "border-red-200",
    bg: "bg-red-50",
    formula: "L_n = 0.02n",

    summary:
      "This model shows infections growing quickly because control methods are weak or absent.",

    scenarios: [
      "New virus variants spreading faster",
      "Large public gatherings",
      "High population density",
      "People not wearing masks",
      "Low vaccination rates",
      "Schools reopening without precautions",
      "Poor healthcare access",
      "Crowded public transport",
      "Ignoring quarantine rules",
      "International travel increasing infections",
    ],

    mathNote:
      "The growth factor becomes bigger over time. This means infections continue increasing and become harder to control.",
  },

  decreasing: {
    title: "Convergent Suppression",
    color: "text-green-600",
    border: "border-green-200",
    bg: "bg-green-50",
    formula: "L_n = 1 / (n + 1)",

    summary:
      "This model shows infections slowing down because prevention methods are working.",

    scenarios: [
      "Mass vaccination campaigns",
      "Strict lockdowns",
      "People washing hands often",
      "Wearing masks in public",
      "Better healthcare systems",
      "Testing and isolating infected people",
      "Public awareness campaigns",
      "Travel restrictions",
      "Improved sanitation",
      "Early treatment reducing spread",
    ],

    mathNote:
      "The growth factor gets smaller over time. Eventually infections slow down and the spread becomes controlled.",
  },

  oscillating: {
    title: "Periodic Oscillation (Waves)",
    color: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    formula: "L_n = 0.1 * sin(n)",

    summary:
      "This model shows infection waves where cases rise and fall repeatedly.",

    scenarios: [
      "Seasonal flu outbreaks",
      "Holiday travel increasing cases",
      "Opening and closing schools",
      "Changes in lockdown rules",
      "Winter seasons causing more infections",
      "People becoming less careful over time",
      "Festivals and sports events",
      "Workplaces reopening",
      "Tourism seasons",
      "Repeated virus outbreaks",
    ],

    mathNote:
      "The infection numbers go up and down over time. This creates waves similar to real disease outbreaks.",
  },
};

function ModelInfo({ type }) {
  const info = MODEL_DETAILS[type];

  if (!info) return null;

  return (
    <div
      className={`p-6 rounded-3xl shadow-lg border-2 transition-all duration-500 ${info.border} ${info.bg}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
            Method Analysis
          </span>

          <h2 className={`font-black text-2xl ${info.color}`}>{info.title}</h2>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase">
              Formula:
            </span>

            <code className="text-xs font-mono bg-white px-2 py-1 rounded border">
              {info.formula}
            </code>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase bg-white ${info.color}`}
        >
          {type} model
        </span>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">
          What It Means
        </span>

        <p className="text-gray-800">{info.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
        {/* Examples */}
        <div>
          <h3 className="text-[10px] font-bold uppercase text-gray-400 mb-2">
            Real Life Examples
          </h3>

          <ul className="space-y-2">
            {info.scenarios.map((s, i) => (
              <li key={i} className="flex items-center text-sm text-gray-700">
                <span
                  className={`mr-2 h-2 w-2 rounded-full ${info.color.replace(
                    "text",
                    "bg",
                  )}`}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Math explanation */}
        <div className="bg-white/40 p-4 rounded-xl border">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 mb-2">
            Mathematical Explanation
          </h3>

          <p className="text-sm text-gray-600">{info.mathNote}</p>
        </div>
      </div>
    </div>
  );
}

export default ModelInfo;
