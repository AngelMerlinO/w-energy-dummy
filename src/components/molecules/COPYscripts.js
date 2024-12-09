const [apexConfig, setApexConfig] = useState(null);
const [spark1, setSpark1] = useState(null);
const [spark2, setSpark2] = useState(null);
const [spark3, setSpark3] = useState(null);
const [spark4, setSpark4] = useState(null);
const [optionsLine, setOptionsLine] = useState(null);
const [optionsCircle4, setOptionsCircle4] = useState(null);
const [optionsBar, setOptionsBar] = useState(null);

let kWh=[
  154.5,
  168.3,
  195.9,
  140.7,
  168.3,
  223.5,
  159.1,
  140.7,
  131.5,
  126.9,
  122.3
]


  async function fetchData() {
  try {
    const response = await fetch('https://apiwenergy.parachico.dev:3000/register/chart');
    const data = await response.json();
    setApexConfig({
        chart: {
          foreColor: '#ccc',
          background: "",
          toolbar: {
            show: false
          },
        },
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: "#535A6C",
          xaxis: {
            lines: {
              show: true
            }
          }
        }
      }
    )
    setOptionsBar({
      chart: {
        height: 380,
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          horizontal: false,
        },
      },
      series: data.Barchart ? 
      Object.entries(data.Barchart).map((entry) => ({
        name: entry[0],
        data: entry[1],
      })) :
      [], 
      xaxis: {
        categories: data.lineChart.month,
      },
      fill: {
        opacity: 1
      },
    
    }
  )
    setSpark1( {//!No data Of fetch
        chart: {
          id: 'spark1',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        series: [{
          data: [0.700, 0.735, 0.770, 0.805, 0.840, 0.875, 0.910, 0.945]
        }],
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 110
          }
        },
        colors: ['#fff'],
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        }
      }
    )
    setSpark2({
        chart: {
          id: 'spark2',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        series: [{
          data: data.lineChart.totalKwh|| kWh
        }],
        stroke: {
          curve: 'smooth'
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 110
          }
        },
        markers: {
          size: 0
        },
        colors: ['#fff'],
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        }
      }
    )
    setSpark3({
        chart: {
          id: 'spark3',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        series: [{
          data: data.lineChart.totalGasto
        }],
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 110
          }
        },
        colors: ['#fff'],
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        }
      }
    )
    setSpark4({
        chart: {
          id: 'spark4',
          group: 'sparks',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          }
        },
        series: [{
          data: data.lineChart.totalTime
        }],
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 110
          }
        },
        colors: ['#fff'],
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        }
      }
    )
    setOptionsCircle4( {
        chart: {
          type: 'radialBar',
          height: 350,
          width: 380,
        },
        title: {
          text: 'Dispositivos con mayor consumo',
          align: 'left',
          offsetY: 25,
          offsetX: 20
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
              margin: 5,
              size: '48%',
              background: 'transparent',
      
            },
            track: {
              show: false,
            },
            startAngle: -180,
            endAngle: 180
      
          },
        },
        stroke: {
          lineCap: 'round'
        },
        series: data.Circle.percentages,
        labels: data.Circle.devices,
        legend: {
          show: true,
          floating: true,
          position: 'right',
          offsetX: -40,
          offsetY: 240
        },
      }
      
    )
    

    setOptionsLine({
        chart: {
          height: 328,
          type: 'line',
          background: 'tranparent',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 1,
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        // colors: ["#3F51B5", '#2196F3'],
        series: [{
          name: "Gastos",
          data: data.lineChart.totalGasto
        },
        {
          name: "kWh mes",
          // average
          data: data.lineChart.totalKwh || kWh
        },
        // {
        //   name: "Tarifa cobrada",
        //   data: [0, 39, 52, 11, 29, 43]
        // }
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
        labels: data.lineChart.month,
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
      })
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

  await fetchData();




