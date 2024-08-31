import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const UserGrowthChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const userGrowthData = [
      { month: "2023-08", totalUsers: 10000, activeUsers: 2000 },
      { month: "2023-09", totalUsers: 12000, activeUsers: 8000 },
      { month: "2023-10", totalUsers: 15000, activeUsers: 100 },
      { month: "2023-11", totalUsers: 18000, activeUsers: 10000 },
      { month: "2023-12", totalUsers: 20000, activeUsers: 12000 },
      { month: "2024-01", totalUsers: 23000, activeUsers: 14000 },
      { month: "2024-02", totalUsers: 25000, activeUsers: 15000 },
      { month: "2024-03", totalUsers: 28000, activeUsers: 17000 },
      { month: "2024-04", totalUsers: 30000, activeUsers: 18000 },
      { month: "2024-05", totalUsers: 32000, activeUsers: 19000 },
      { month: "2024-06", totalUsers: 35000, activeUsers: 20000 },
      { month: "2024-07", totalUsers: 38000, activeUsers: 21000 }
    ];

    const months = userGrowthData.map(data => data.month);
    const totalUsers = userGrowthData.map(data => data.totalUsers);
    const activeUsers = userGrowthData.map(data => data.activeUsers);

    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Total Users',
            data: totalUsers,
            borderColor: '#00BFFF',
            backgroundColor: '#00BFFF',
            fill: false
          },
          {
            label: 'Active Users',
            data: activeUsers,
            borderColor: '#FF69B4', 
            backgroundColor: '#FF69B4',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'User Growth Chart',
            color: '#FFFFFF' 
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              }
            }
          },
          legend: {
            labels: {
              color: '#FFFFFF' 
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
              color: '#FFFFFF' 
            },
            ticks: {
              color: '#FFFFFF' 
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' 
            }
          },
          y: {
            title: {
              display: true,
              text: 'Number of Users',
              color: '#FFFFFF' 
            },
            ticks: {
              color: '#FFFFFF' 
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            beginAtZero: true
          }
        },
        onClick: (event, activeElements) => {
          if (activeElements.length > 0) {
            const chartElement = activeElements[0];
            const datasetIndex = chartElement.datasetIndex;
            const index = chartElement.index;

            const label = chartInstance.data.labels[index];
            const value = chartInstance.data.datasets[datasetIndex].data[index];
            console.log(`Clicked: ${label} - ${chartInstance.data.datasets[datasetIndex].label}: ${value}`);
            alert(`Filter data for ${label}: ${chartInstance.data.datasets[datasetIndex].label} with ${value} users`);
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #191970, #000000)", 
      borderRadius: "8px",
      padding: "20px"
    }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default UserGrowthChart;