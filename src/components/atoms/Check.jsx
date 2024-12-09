import React, { useState, useEffect, useContext } from "react";
import "../../assets/styles/Check.css";
import DevicesContext from "../../contexts/DevicesContext";

function Check({ check, id, name }) {
    const { Devices, setDevices } = useContext(DevicesContext);

    const HandlerInput = (check, id, name, e) => {
        e.preventDefault();
        fetch(`https://apiwenergy.parachico.dev:3000/device/status/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Encuentra el dispositivo correspondiente en el contexto DevicesContext
                const updatedDevices = Devices.map((device) => {
                    if (device.id === data.device[0].id) {
                        // Actualiza el estado del dispositivo
                        return { ...device, status: data.device[0].status };
                    }
                    return device;
                });

                // Actualiza el contexto DevicesContext con el dispositivo actualizado
                setDevices(updatedDevices);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        // !other
        // Obtener el identificador único del label concatenando el id
        const labelId = `label${id}`;

        // Mostrar el label específico cuando se hace clic en el checkbox
        const label = document.getElementById(labelId);
        if (label) {
            label.style.display = "inline-block"; // Mostrar el label específico
            setTimeout(() => {
                label.style.display = "none"; // Ocultar el label después de 3 segundos
            }, 3000);
        }
    };
    useEffect(() => {
    }, [Devices]);  

    return (
        <>
            <div className="flex items-center">
                <label htmlFor={id} className="check relative group">
                    <input
                        checked={check}
                        onClick={(e) => HandlerInput(check, id, name, e)}
                        id={id}
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-[--Aqua] bg-red-600 border-gray-300 rounded focus:ring-[--Aureolin] "
                    />


                    <span id={`label${id}`} className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 bg-dark dark:bg-black" style={{ display: "none" }}>
                        {check ? "Encendido" : "Apagado"}
                    </span>
                </label>
            </div>
      </>
  );
}

export default Check;
