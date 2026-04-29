function ModelInfo({ type }) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h2 className="font-bold">Model Explanation</h2>

      {type === "increasing" && <p>Infection rate increases over time.</p>}
      {type === "decreasing" && <p>Infection rate decreases due to control.</p>}
      {type === "oscillating" && <p>Infection rises and falls in waves.</p>}
    </div>
  );
}

export default ModelInfo;