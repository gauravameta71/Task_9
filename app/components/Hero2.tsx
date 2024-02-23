import React from "react";

function Grid() {
  return (
    <div className="container mx-auto w-screen h-full">
      <div className="text-center mt-8">
        <button className="text-6xl gont-bold m-4 p-6">Heading</button>
      </div>
      <div className="flex flex-row  justify-center gap-x-32 ">
        <div className="bg-white rounded-sm shadow-md p-4 h-44 w-44">
          {/* Add your box content here */}
        </div>
        <div className="bg-white rounded-sm shadow-md p-4 h-44 w-44">
          {/* Add your box content here */}
        </div>
        <div className="bg-white rounded-sm shadow-md p-4 h-44 w-44">
          {/* Add your box content here */}
        </div>
        <div className="bg-white rounded-sm shadow-md p-4 h-44 w-44">
          {/* Add your box content here */}
        </div>
      </div>
      <div className="flex justify-center items-center h-[350px] ">
        <div className="flex space-x-4 gap-[112px]">
          <div className="bg-gray-300 p-4 rounded-md text-center h-32 w-44 text-black font-semibold flex justify-center items-center">
            <p>This is Card 1</p>
          </div>
          <div className="bg-gray-300 p-4 rounded-md text-center h-32 w-44 text-black font-semibold flex justify-center items-center">
            <p>This is Card 2</p>
          </div>
          <div className="bg-gray-300 p-4 rounded-md text-center h-32 w-44 text-black font-semibold flex justify-center items-center">
            <p>This is Card 3</p>
          </div>
          <div className="bg-gray-300 p-4 rounded-md text-center h-32 w-44 text-black font-semibold flex justify-center items-center">
            <p>This is Card 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
