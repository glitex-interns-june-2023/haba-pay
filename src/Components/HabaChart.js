import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HabaChart = () => {

  const data = [
    { x: 0, y: 210 },
    { x: 1, y: 280 },
    { x: 2, y: 275 },
    { x: 3, y: 298 },
    { x: 4, y: 310 },
    { x: 5, y: 305 },
    { x: 6, y: 340 },
  ];


  const formatXAxisLabel = (value) => dayNames[value];


  return (
    <div className="haba-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tickFormatter={formatXAxisLabel} />
          <YAxis
            ticks={[0, 100000, 200000, 300000, 400000, 500000]}
            tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
            domain={[0, 500000]}
          />
          <Line type="monotone" dataKey="y" stroke="#0000" dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <div className="legend" style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        LEGEND
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div className="new-users" style={{ display: 'flex', alignItems: 'center', marginRight: '20px', gap: '5px' }}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#FDAC15" />
              <circle cx="10" cy="10" r="6.25" fill="#FDAC15" />
            </svg>
          </div>
          <div className="new-users-title">New Users</div>
        </div>

        <div className="national-reach" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#323232" />
              <circle cx="10" cy="10" r="6.25" fill="#323232" />
            </svg>
          </div>
          <div className="national-reach-title">National Reach</div>
        </div>
      </div>
    </div>
  );
};

export default HabaChart;
