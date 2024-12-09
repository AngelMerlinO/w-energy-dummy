function Cardinfo() {
    return (
      <>
        <div className="sparkboxes mt-4">
          <div className="box box1">
            <div className="details">
              <h3 className="font-sans font-bold text-black text-3xl">$0.945 MNX</h3>
              <h4 className="font-sans text-black text-2xl font-bold">Tarifa</h4>
              <h4 className="font-sans text-black text-2xl font-bold">primeros 75kWh</h4>
            </div>
            
            <div id="spark1"></div>
          </div>
          <div className="box box2">
            <div className="details">
              <h3 className="font-sans font-bold text-black text-3xl">154.5 kWh</h3>
              <h4 className="font-sans text-black text-2xl font-bold">consumo promedio</h4>
            </div>
            <div id="spark2"></div>
          </div>
          <div className="box box3">
            <div className="details">
              <h3 className="font-sans font-bold text-black text-3xl">1000$</h3>
              <h4 className="font-sans text-black text-2xl font-bold">Gastos</h4>
            </div>
            <div id="spark3"></div>
          </div>
          <div className="box box4">
            <div className="details">
              <h3 className="font-sans font-bold text-black text-3xl">2H</h3>
              <h4 className="font-sans text-black text-2xl font-bold">Tiempo </h4>
            </div>
            <div id="spark4"></div>
          </div>
        </div>
      </>
    );
  }
  
  export default Cardinfo;
  