export function simulateGrowth(T0, steps, type) {
  let T_dynamic = T0;
  let T_static = T0;
  const static_growth = 0.05; // 5% constant growth
  const data = [];

  for (let n = 0; n < steps; n++) {
    let Ln;
    if (type === "increasing") Ln = 0.005 * n;
    else if (type === "decreasing") Ln = 0.1 / (n + 1);
    else if (type === "oscillating") Ln = 0.1 * Math.sin(n);

    T_dynamic = T_dynamic * (1 + Ln);
    T_static = T_static * (1 + static_growth);

    data.push({
      time: n,
      Dynamic: Number(T_dynamic.toFixed(2)),
      Static: Number(T_static.toFixed(2)),
    });
  }
  return data;
}