// This function runs your mathematical model
// T(n+1) = Tn * (1 + Ln)

export function simulateGrowth(T0, steps, type) {
  let T = T0;
  const data = [];

  for (let n = 0; n < steps; n++) {
    let Ln;

    // Dynamic growth factor based on selection
    if (type === "increasing") {
      Ln = 0.02 * n; // grows over time
    } 
    else if (type === "decreasing") {
      Ln = 1 / (n + 1); // decreases over time
    } 
    else if (type === "oscillating") {
      Ln = 0.1 * Math.sin(n); // waves
    }

    // Apply recursive formula
    T = T * (1 + Ln);

    data.push({
      time: n,
      value: Number(T.toFixed(2)),
    });
  }

  return data;
}