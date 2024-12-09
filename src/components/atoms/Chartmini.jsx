import React, { useEffect, useContext, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import DevicesContext from '../../contexts/DevicesContext';

function Chartmini(id, onOff, Name) {
    const { Devices, setDevices } = useContext(DevicesContext);
    const [chartData, setChartData] = useState({
        categories: ['5 Segundos', '10 Segundos', '15 Segundos', '20 Segundos', '25 Segundos', '30 Segundos'],
        data: [100, 80, 90, 80, 80, 100]
    });
    
    useEffect(() => {
        let intervalId;
        
    if (onOff) {
      // Iniciar un intervalo que se ejecutará cada 5 segundos
      intervalId = setInterval(() => {
        // Obtener la última categoría y agregar una nueva categoría en intervalos de 5 segundos
         let lastCategoryNumber = parseInt(chartData.categories[chartData.categories.length - 1], 10);
        if (isNaN(lastCategoryNumber)) {
            // Si la última categoría no tiene el formato esperado, inicializarla en 5
            lastCategoryNumber = 5;
        }

        // Calcular la nueva categoría y asegurarse de que tenga el formato correcto
        const newCategoryNumber = lastCategoryNumber + 5;
        const newCategory = `${newCategoryNumber} Segundos`;

        // Generar un valor aleatorio entre 50 y 100 para la eficiencia eléctrica
        const randomValue = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

        // Agregar un nuevo elemento al array `data`
        chartData.data.push(randomValue);

        // Actualizar el estado del gráfico con los nuevos datos y categorías
        setChartData({
          categories: [...chartData.categories, newCategory],
          data: chartData.data
        });
      }, 5000); // 5000 milisegundos = 5 segundos
    }

    // Limpiar el intervalo cuando el componente se desmonta o cuando `onOff` cambia a `false`
    return () => {
      if (intervalId && onOff) {
        clearInterval(intervalId);
      }
    };
  }, [onOff]);
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
                name: Name,
                data: chartData.data,
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
            categories: chartData.categories,
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
            <ApexCharts options={options} series={options.series} type="area" />  
        </>
    );
}

export default Chartmini;
