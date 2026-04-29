function ModelInfo({ type }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md space-y-3">
      
      <h2 className="font-bold text-xl">
        📊 Model Explanation
      </h2>

      {type === "increasing" && (
        <div className="space-y-2">
          <p className="font-semibold text-red-500">
            Increasing Growth Model
          </p>
          <p>
            The infection rate grows over time as the growth factor increases.
          </p>
          <p className="text-sm text-gray-600">
            Real-world meaning: No control measures, poor compliance, or rapid spread.
          </p>
          <p className="text-sm text-gray-600">
            Behaviour: Exponential-like growth, unstable system.
          </p>
        </div>
      )}

      {type === "decreasing" && (
        <div className="space-y-2">
          <p className="font-semibold text-green-600">
            Controlled Decay Model
          </p>
          <p>
            The infection rate decreases over time as interventions take effect.
          </p>
          <p className="text-sm text-gray-600">
            Real-world meaning: Vaccination, lockdowns, mask usage.
          </p>
          <p className="text-sm text-gray-600">
            Behaviour: Stabilising system, converges toward zero infections.
          </p>
        </div>
      )}

      {type === "oscillating" && (
        <div className="space-y-2">
          <p className="font-semibold text-blue-600">
            Wave (Oscillation) Model
          </p>
          <p>
            Infection rates rise and fall in cycles over time.
          </p>
          <p className="text-sm text-gray-600">
            Real-world meaning: Waves of outbreaks (COVID-style patterns).
          </p>
          <p className="text-sm text-gray-600">
            Behaviour: Periodic instability due to behavioural changes.
          </p>
        </div>
      )}

    </div>
  );
}

export default ModelInfo;