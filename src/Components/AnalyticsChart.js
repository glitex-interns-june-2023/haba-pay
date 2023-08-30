import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const AnalyticsChart = () => {
  const data = [
    { x: 0, y: 210, z: 0 },
    { x: 1, y: 280, z: 7 },
    { x: 2, y: 275, z: 7 },
    { x: 3, y: 298, z: 7 },
    { x: 4, y: 310, z: 7 },
    { x: 5, y: 305, z: 12 },
    { x: 6, y: 340, z: 12 },
  ];

  const formatXAxisLabel = (value) => dayNames[value];

  return (
    <div>
      <LineChart width={650} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" tickFormatter={formatXAxisLabel} />
        <YAxis yAxisId="left-axis" ticks={[0, 100, 200, 300, 400, 500]} domain={[0, 500]} />
        <YAxis yAxisId="right-axis" orientation="right" ticks={[0, 10, 20, 30, 40, 50]} domain={[0, 50]} />
        <Line yAxisId="left-axis" type="dashed" dataKey="y" stroke="#FDAC15" dot={false} />
        <Line yAxisId="right-axis" type="dashed" dataKey="z" stroke="#FDAC15" dot={false} />
      </LineChart>

      <div className="legend" style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        LEGEND
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div className="new-users" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#FDAC15" />
              <circle cx="10" cy="10" r="6.25" fill="#FDAC15" />
            </svg>
          </div>
          New Users
        </div>

        <div className="national-reach" style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#323232" />
              <circle cx="10" cy="10" r="6.25" fill="#323232" />
            </svg>
          </div>
          National Reach
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
