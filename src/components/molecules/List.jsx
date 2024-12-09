import React from "react";
import Check from "../atoms/Check";
import Chartmini from "../atoms/Chartmini";
import Focochart from "../atoms/Focochart";
import "../../assets/styles/List.css";

function List({ params }) {
  const { id, name, description, status } = params;
  // console.log("🚀 ~ file: List.jsx:9 ~ List ~ status:", status)


  return (
    <>
      <div className="flex justify-center pt-5 w-[98%] md:w-[98%] lg:w-11/12 text-[#fff] mx-auto">
        <div className="bd-red-500 borderEspecial border-b-2 border-[--Lines] rounded-lg hover:bg-gray-700 flex h-auto w-full">
          {/* left */}
          <div className="flex w-2/5">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-5xl font-montserrat font-bold">
                {name}
              </h1>
              <div className="label-container w-[50%] overflow-hidden whitespace-no-wrap overflow-ellipsis">
                <p className="label text-sm font-montserrat font-bold">
                  {description}
                </p>
              </div>
            </div>
          </div>
          {/* end left */}
          {/* center */}
          <div className="flex h-auto overflow-hidden w-2/5">
            {/* Condición */}
            {id === 1 ? (
              <Focochart
              key={id} 
              />
            ) : (
              <Chartmini 
              key={id} 
              id={id}
              onOff={status == 1 ? true : false}
              Name={name} />
            )}
            {/* Fin de la condición */}
          </div>

          {/* end center */}
          {/* right */}
          <div className="grow w-1/5">
            <div className="flex items-center justify-center w-full h-full">
              <Check
                key={id}
                check={status == 1 ? true : false}
                id={id}
                name={name}
              />
               
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </>
  );
}

export default List;
