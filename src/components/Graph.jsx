import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label, Legend, ResponsiveContainer } from "recharts";

function Graph({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      {/* ResponsiveContainer makes it look good on all screen sizes */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          
          <XAxis dataKey="time" stroke="#64748b">
            <Label value="Time (Days)" offset={-15} position="insideBottom" fill="#475569" style={{ fontWeight: 'bold' }} />
          </XAxis>

          <YAxis stroke="#64748b">
            <Label value="Infected Population (Tn)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontWeight: 'bold', fill: '#475569' }} />
          </YAxis>

          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          
          {/* Legend tells the user what each color represents */}
          <Legend verticalAlign="top" height={36}/>

          <Line 
            name="Dynamic Model (Projected)"
            type="monotone" 
            dataKey="Dynamic" 
            stroke="#2563eb" 
            strokeWidth={3} 
            dot={false} 
            activeDot={{ r: 6 }}
          />
          
          <Line 
            name="Static Model (Baseline)"
            type="monotone" 
            dataKey="Static" 
            stroke="#94a3b8" 
            strokeDasharray="5 5" 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;