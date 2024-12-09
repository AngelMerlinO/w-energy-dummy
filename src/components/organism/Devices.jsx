import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import Navbar from "../molecules/Navbar";
import List from "../molecules/List.jsx";
import DevicesContext from "../../contexts/DevicesContext.js";

function Devices() {
  const { User } = useContext(UserContext);
  const { Devices, setDevices } = useContext(DevicesContext);  

  useEffect(() => {
    fetch(`https://apiwenergy.parachico.dev:3000/device/${2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("🚀 ~ file: Devices.jsx:20 ~ .then ~ data.data:", JSON.stringify(data.data))
        setDevices(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [User, setDevices]);  

  return (
    <>
      <div className="flex flex-col flex-grow h-full w-full">
        {/* Top row */}
        <div className="h-auto w-full">
          <Navbar />
        </div>
        {/* Bottom row */}
        <div className="flex-grow w-full h-full">
          {Devices ? (
            Devices.map((device) => (
              <div key={device.id}>
                <List params={device} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Devices;
