import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label, Legend, ResponsiveContainer } from "recharts";

function Graph({ data }) {
  return (
    // Lowered padding on mobile (p-3) vs desktop (p-6)
    <div className="bg-white p-3 md:p-6 rounded-2xl shadow-md border border-gray-100 w-full">
      
      {/* 
          Height is set to 300px on mobile to save vertical scrolling space, 
          and 450px on larger screens for better detail 
      */}
      <div className="h-[300px] md:h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            // Reduced margins for mobile to allow the chart to use the full screen width
            margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              dataKey="time" 
              stroke="#94a3b8" 
              fontSize={12} 
              tickMargin={10}
            >
              <Label 
                value="Time (Days)" 
                offset={-10} 
                position="insideBottom" 
                fill="#64748b" 
                style={{ fontWeight: '600', fontSize: '12px' }} 
              />
            </XAxis>

            <YAxis 
              stroke="#94a3b8" 
              fontSize={12}
              // Hide the tick values on very small screens if they overlap, 
              // or keep them simple as done here
            >
              <Label 
                value="Infections" 
                angle={-90} 
                position="insideLeft" 
                offset={10}
                style={{ textAnchor: 'middle', fontWeight: '600', fill: '#64748b', fontSize: '12px' }} 
              />
            </YAxis>

            {/* Tooltip is naturally mobile-friendly as it shows on tap */}
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                fontSize: '12px' 
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              align="center" 
              wrapperStyle={{ paddingBottom: '20px', fontSize: '12px' }}
            />

            <Line 
              name="Dynamic"
              type="monotone" 
              dataKey="Dynamic" 
              stroke="#2563eb" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6 }}
              animationDuration={1000}
            />
            
            <Line 
              name="Static"
              type="monotone" 
              dataKey="Static" 
              stroke="#94a3b8" 
              strokeDasharray="5 5" 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Optional mobile hint */}
      <p className="text-[10px] text-center text-slate-400 mt-2 block md:hidden">
        Tap the lines to see specific daily values
      </p>
    </div>
  );
}

export default Graph;