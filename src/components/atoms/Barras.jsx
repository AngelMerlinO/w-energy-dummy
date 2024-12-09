import { useEffect, useContext } from 'react';
import ApexCharts from 'react-apexcharts';
function Pie() {
    useEffect(() => {
        // !start chart
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("area-chart"), options);
            chart.render();
        }
        // !end chart

    }, [])
    let options = {}

    return (
        <>
            <ApexCharts options={options} series={options.series} type="pie" />
        </>
    );
}

export default Pie;