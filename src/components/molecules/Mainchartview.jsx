import "../../assets/styles/Cardinfo.css"
import "../../assets/styles/Mainchartview.css"

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { apexConfig, spark1, spark2, spark3, spark4, optionsLine, optionsCircle4, optionsBar } from './scripts';
import Cardinfo from "./Cardinfo";

function Mainchartview() {
  const [chartData, setChartData] = useState(1);
  const chartOptions = useMemo(() => ({
    apexConfig,
    spark1,
    spark2,
    spark3,
    spark4,
    optionsLine,
    optionsCircle4,
    optionsBar,

  }), [apexConfig, spark1, spark2, spark3, spark4, optionsLine, optionsCircle4, optionsBar]);

  useEffect(() => {
    // Creating and rendering the charts inside the useEffect with an empty dependency array
    var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
    chartLine.render();
    var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
    chartCircle4.render();
    var chartBar = new ApexCharts(document.querySelector("#barchart"), optionsBar);
    chartBar.render();
    // var chartArea = new ApexCharts(document.querySelector("#areachart"), optionsArea);
    // chartArea.render();
    var sparkline1 = new ApexCharts(document.querySelector("#spark1"), spark1);
    sparkline1.render();
    var sparkline2 = new ApexCharts(document.querySelector("#spark2"), spark2);
    sparkline2.render();
    var sparkline3 = new ApexCharts(document.querySelector("#spark3"), spark3);
    sparkline3.render();
    var sparkline4 = new ApexCharts(document.querySelector("#spark4"), spark4);
    sparkline4.render();

    // Cleanup function to remove the charts when the component is unmounted
    return () => {
      chartLine.destroy();
      chartCircle4.destroy();
      chartBar.destroy();
      // chartArea.destroy();
      sparkline1.destroy();
      sparkline2.destroy();
      sparkline3.destroy();
      sparkline4.destroy();
    };
  }, []);  
  return (
    <>
      {chartData && (
    // Render your charts using the `chartData` state variable
        <div id="wrapper ">

            <div className="main">
             <Cardinfo/>
             <div className="contenCharts flex flex-wrap gap-3 mt-5"> {/* Utilizo la clase gap-4 para agregar espacio entre los elementos */}
  <div className="w-full lg:w-[48%] colorNotBlack ">
    <div className="bg-red-900 box shadow">
      <div id="radialBarBottom"></div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 colorNotBlack">
    <div className="box shadow">
      <div id="line-adwords" className=""></div>
    </div>
  </div>
</div>

<div className="colorNotBlack my-4">
  <div className="col-md-6">
    <div className="box shadow">
      <div id="barchart"></div>
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