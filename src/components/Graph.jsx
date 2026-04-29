import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Graph({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#2563eb" />
      </LineChart>
    </div>
  );
}

export default Graph;