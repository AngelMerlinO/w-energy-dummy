import "../../assets/styles/Cardinfo.css"
import "../../assets/styles/Mainchartview.css"

import React, { useEffect, useState, useMemo, useCallback } from "react";
// import { apexConfig, spark1, spark2, spark3, spark4, optionsLine, optionsCircle4, optionsBar } from '../../../scripts';
import Cardinfo from "./Cardinfo";
import { ApexCharts } from 'react-apexcharts';

// ... (imports)

function Mainchartview() {
  const [chartData, setChartData] = useState({
    "lineChart": {
      "month": [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"
      ],
      "totalGasto": [141.49, 154.81, 180.13, 128.83, 154.81, 206.97, 146.45, 128.83, 120.93, 115.99, 111.89],
      "totalKwh": [154.5, 168.3, 195.9, 140.7, 168.3, 223.5, 159.1, 140.7, 131.5, 126.9, 122.3],
      "totalTime": [55, 65, 85, 45, 65, 105, 58, 45, 38, 35, 31]
    }
  });

  useEffect(() => {
    console.log("🚀 ~ file: Mainchartview.jsx:13 ~ useEffect ~ useEffect:");
    const fetchDataAndRenderCharts = async () => {
      try {
        const response = await fetch('https://apiwenergy.parachico.dev:3000/register/chart');
        const data = await response.json();
        console.log("🚀 ~ file: Mainchartview.jsx:19 ~ fetchDataAndRenderCharts ~ data:", data);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching or rendering data:', error);
      }
    };

    if (!chartData) {
      fetchDataAndRenderCharts();
    }
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: Mainchartview.jsx:30 ~ useEffect ~ useEffect:");
    console.log("chartData:", chartData);

    if (chartData && chartData.lineChart) {
      console.log('Selected elements:', {
        lineChart: document.querySelector('#line-adwords')
      });

      const updatedOptionsLine = {
        chart: {
          height: 328,
          type: 'line',
          background: 'transparent',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 1
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [
          {
            name: "Gastos",
            data: chartData.lineChart.totalGasto
          },
          {
            name: "kWh mes",
            data: chartData.lineChart.totalKwh || []
          }
        ],
        title: {
          text: 'Por mes',
          align: 'left',
          offsetY: 25,
          offsetX: 20
        },
        subtitle: {
          text: 'Año 2023',
          offsetY: 55,
          offsetX: 20
        },
        markers: {
          size: 6,
          strokeWidth: 0,
          hover: {
            size: 9
          }
        },
        grid: {
          show: true,
          padding: {
            bottom: 0
          }
        },
        labels: chartData.lineChart.month,
        xaxis: {
          tooltip: {
            enabled: false
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetY: -20
        }
      };

      var chartLine = new ApexCharts(document.querySelector('#line-adwords'), updatedOptionsLine);
      chartLine.render();
    }
  }, [chartData, chartData?.lineChart]);

  return (
    <>
      {chartData && (
        <div id="wrapper">
          <div className="main">
            <div className="contenCharts">
              <div className="col-md-7">
                <div className="box shadow mt-4">
                  <div id="line-adwords" className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mainchartview;

