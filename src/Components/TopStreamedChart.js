import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TopStreamedSongs = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const songData = [
      { title: "Song A", streams: 12000 },
      { title: "Song B", streams: 11000 },
      { title: "Song C", streams: 9000 },
      { title: "Song D", streams: 8000 },
      { title: "Song E", streams: 7000 },
    ];

    const labels = songData.map(song => song.title);
    const streams = songData.map(song => song.streams);

    const ctx = chartRef.current.getContext('2d');
    
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Streams',
            data: streams,
            backgroundColor: [
              'rgba(0, 255, 255, 0.8)',
              'rgba(0, 191, 255, 0.8)',  
              'rgba(30, 144, 255, 0.8)',  
              'rgba(0, 0, 255, 0.8)',     
              'rgba(25, 25, 112, 0.8)',   // Midnight Blue
            ],
            borderColor: [
              'rgba(0, 255, 255, 1)',   
              'rgba(0, 191, 255, 1)',   // Deep Sky Blue
              'rgba(30, 144, 255, 1)',  // Dodger Blue
              'rgba(0, 0, 255, 1)',     
              'rgba(25, 25, 112, 1)',   // Midnight Blue
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' 
            },
            ticks: {
              color: '#FFFFFF' 
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' 
            },
            ticks: {
              color: '#FFFFFF', 
              callback: function(value) {
                return value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString()} streams`;
              }
            }
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

export default TopStreamedSongs;