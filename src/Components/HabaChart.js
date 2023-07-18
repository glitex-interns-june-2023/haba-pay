import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../Styles/HabaChart.css';

const HabaChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Dotted Chart',
        data: [200000, 150000, 300000, 250000, 400000, 350000, 500000],
        borderColor: 'rgba(0, 0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        lines: {
          color: 'rgba(0, 0, 0, 0.3)',
          borderDash: [2],
          drawBorder: false,
          zeroLineColor: 'rgba(0, 0, 0, 1)',
        },
        ticks: {
          callback: (value) => {
            if (value === 0) return value;
            return `${value / 1000}k`; 
          },
          stepSize: 100000,
          suggestedMax: 600000,
        },
      },
      x: {
        gridlines: {
          color: 'rgba(0, 0, 0, 0.3)',
          borderDash: [2],
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
    },
  };

  return (
    <div style={{ width: '600px' }}>
      <Line data={data} options={options} height={150} />
      <div className ="legend" style={{ 
        display: 'flex', justifyContent: 'center', marginTop: '8px' 
        }}>
        LEGEND
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div className="new-users" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#FDAC15',
              marginRight: '5px',
              borderRadius: '50%',
            }}
          />
          New Users
        </div>
        <div className="national-reach" style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#323232',
              marginRight: '5px',
              borderRadius: '50%',
            }}
          />
          National Reach
        </div>
      </div>
    </div>
  );
};

export default HabaChart;