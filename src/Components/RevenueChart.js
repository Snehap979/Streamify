import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, PieController);

const RevenueDistribution = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const revenueData = [
      { source: "Premium Subscriptions", amount: 50000 },
      { source: "Family Plans", amount: 30000 },
      { source: "Student Subscriptions", amount: 10000 },
      { source: "Audio Ads", amount: 15000 },
      { source: "Display Ads", amount: 8000 },
      { source: "Video Ads", amount: 12000 }
    ];

    const labels = revenueData.map(data => data.source);
    const amounts = revenueData.map(data => data.amount);

    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: amounts,
            backgroundColor: [
              'rgba(0, 191, 255, 0.8)',   
              'rgba(30, 144, 255, 0.8)',  
              'rgba(65, 105, 225, 0.8)', 
              'rgba(100, 149, 237, 0.8)', 
              'rgba(135, 206, 250, 0.8)', 
              'rgba(176, 224, 230, 0.8)', 
            ],
            borderColor: [
              'rgba(0, 191, 255, 1)',  
              'rgba(30, 144, 255, 1)', 
              'rgba(65, 105, 225, 1)', 
              'rgba(100, 149, 237, 1)', 
              'rgba(135, 206, 250, 1)', 
              'rgba(176, 224, 230, 1)', 
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#FFFFFF' 
            }
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.label}: $${tooltipItem.raw}`;
              }
            }
          }
        },
        onClick: (event, activeElements) => {
          if (activeElements.length > 0) {
            const chartElement = activeElements[0];
            const datasetIndex = chartElement.datasetIndex;
            const index = chartElement.index;

            const source = chartInstance.data.labels[index];
            const revenue = chartInstance.data.datasets[datasetIndex].data[index];

            console.log(`Clicked: ${source} - Revenue: $${revenue}`);
            alert(`Filter data for ${source} with revenue of $${revenue}`);
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

export default RevenueDistribution;