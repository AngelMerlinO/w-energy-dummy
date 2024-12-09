import React, { useContext } from "react";
import Devices from "../components/organism/Devices";
import Charts from "../components/organism/Charts";
import Holy from "../components/molecules/Holy";
import "../assets/styles/Main.css";
import UserContext from '../contexts/UserContext.js';

function Main() {
  const { User,setUser  } = useContext(UserContext);

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen w-full flex-grow-1">
      {User.leftColumn == false && User.rightColumn == false && (
        <>
        <Holy/>
        </>
      )}

      {/* Left Column */}
      {User.leftColumn && (
        <div className="flex bg-[--black] p-0 md:w-1/3 lg:w-1/6 flex-grow no-scrollbar component-box component-box-animation smooth-scroll  ">
          <Devices />
        </div>
      )}

      {/* Right Column */}
      {User.rightColumn && (
        <div className={`${User.leftColumn ? 'hidden' : ''} md:block flex-grow md:w-2/3 bg-[--black] p-2 component-box smooth-scroll component-box-animation right-column`}>
          <Charts  />
        </div>
      )}
    </div>
  );
}

export default Main;
