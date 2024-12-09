// C:\Users\darin\Documents\DUMmy\Energy_DUMmy\src\components\molecules\scripts.js
async function fetchData(parametro) {
  console.log("🚀 ~ file: scripts.js:2 ~ fetchData ~ parametro:", parametro);
  try {
    const response = await fetch('https://apiwenergy.parachico.dev:3000/register/chart');
    const data = await response.json();
    if (parametro === 1) {
      return data.lineChart;
    } else if (parametro === 2) {
      const convertedData = await Object.entries(data.Barchart).map((entry) => ({
        name: entry[0],
        data: entry[1],
      }));
      return convertedData;
    } else if (parametro === 3) {
      return data.circleChart;
    } else {
      throw new Error('Parámetro no válido');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
let lineChart = await fetchData(1);
let Circle = await fetchData(3);
let barras = await fetchData(2);
export const apexConfig = {
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
};

export const spark1 = {
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

export const spark2 = {
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
    data: lineChart.totalKwh
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

export const spark3 = {
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
    data: lineChart.totalGasto
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

export const spark4 = {
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
    data: lineChart.totalTime
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
let kWh=[100, 400, 500, 700, 100, 300, 700,200, 800, 600]
let Gastos=[1, 15, 26, 20, 330, 27,330, 27,330, 27]
let LABELS=['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV']
export const optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    
    background: 'tranparent',
    "foreColor": "#FFFFFF",
    
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
    data: lineChart.totalGasto
  },
  {
    name: "kWh mes",
    // average
    data: lineChart.totalKwh
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
  labels: lineChart.month,
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
}

let  porcetaje=[100, 63, 77, 100]
let devices= ['Foco', 'Clima', 'Refrigerador','Refrigerador']
export const optionsCircle4 = {
  chart: {
    type: 'radialBar',
    height: 350,
    width: 380,
    "foreColor": "#FFFFFF",

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
  series: Circle.percentages,
  labels: Circle.devices,
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: -40,
    offsetY: 240
  },
}




export const optionsBar = {
  chart: {
    height: 380,
    type: 'bar',
    stacked: true,
    "foreColor": "#FFFFFF",

  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      horizontal: false,
    },
  },
  series: barras ,
  xaxis: {
    categories: lineChart.month,
  },
  fill: {
    opacity: 1
  },

}



// export const optionsArea = {
//   chart: {
//     height: 380,
//     type: 'area',
//     stacked: false,
//   },
//   stroke: {
//     curve: 'straight'
//   },
//   series: [{
//       name: "Music",
//       data: [11, 15, 26, 20, 33, 27]
//     },
//     {
//       name: "Photos",
//       data: [32, 33, 21, 42, 19, 32]
//     },
//     {
//       name: "Files",
//       data: [20, 39, 52, 11, 29, 43]
//     }
//   ],
//   xaxis: {
//     categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
//   },
//   tooltip: {
//     followCursor: true
//   },
//   fill: {
//     opacity: 1,
//   },

// }