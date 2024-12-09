import { useEffect, useContext, useState } from 'react';
import DevicesContext from '../../contexts/DevicesContext';
import ApexCharts from 'react-apexcharts';

function Focochart() {
    const { Devices, setDevices } = useContext(DevicesContext);  
    const [dataC, setDataC] = useState([]);
  const [label, setLabel] = useState([]);
  useEffect(() => {
    // !start chart
      if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
          const chart = new ApexCharts(document.getElementById("area-chart"), options);
          chart.render();
      }
    // !end chart
      const interval = setInterval(() => {
          fetch(`https://apiwenergy.parachico.dev:3000/register/chartfoco`)
              .then((response) => response.json())
              .then((data) => {
                  // console.log("🚀 ~ file: Focochart.jsx:33 ~ .then ~ data:", data.data.Tiempo)
                  setDataC(data.data.eficiencia)
                  setLabel(data.data.Tiempo)
              })
              .catch((error) => {
                  console.error("Error fetching data:", error);
              });
      }, 20000); // 40000 milisegundos = 40 segundos

      return () => clearInterval(interval);

    }, [Devices])
    
    
    let options = {
        chart: {
            type: "line",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            title: 'Device Usage',
            subtitle: 'Hoy',
            animations: {
                enabled: true,
                easing: '',
                duration: 1000
            }
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
            strokeDashArray: 0,
        },
        series: [
            {
                name: "Name",
                data: dataC,
                fill: {
                    type: 'gradient',
                    gradient: {
                        colors: ['#00FFFF', '#0000FF']
                    }
                },
                stroke: '#000000',
                markers: {
                    size: 5,
                    color: '#000000'
                }
            }
        ],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories:label,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: true
        }
    };

    
    return (
        <>
            {/* {Array.isArray(Devices) && Devices[0].status === 1 && ( */}
                <>
                    <ApexCharts options={options} series={options.series} type="area" />
                </>
            {/* )} */}
        </>
    );

}

export default Focochart;