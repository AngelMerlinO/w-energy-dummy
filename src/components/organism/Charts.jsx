import React, { useContext } from "react";
import Areachart from '../molecules/Areachart';
import Menu from '../atoms/Menu';
import UserContext from '../../contexts/UserContext';
import Mainchartview from "../molecules/Mainchartview";

function Charts() {
 

  const { User } = useContext(UserContext);

  return (
    <>
    <div className="flex absolute justify-center items-center w-full h-auto ">
          {!User.leftColumn && <Menu />}
        </div>
        
        <Mainchartview/>
    </>
 
  );
}

export default Charts;
