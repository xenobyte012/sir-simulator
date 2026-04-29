import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Graph({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Dynamic" stroke="#2563eb" strokeWidth={3} dot={false} />
<Line type="monotone" dataKey="Static" stroke="#94a3b8" strokeDasharray="5 5" dot={false} />
      </LineChart>
    </div>
  );
}

export default Graph;