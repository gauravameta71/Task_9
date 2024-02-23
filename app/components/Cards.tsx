import React from "react";

const CardComponent = () => {
  return (
    <div className="flex justify-center items-center h-[350px] ">
      <div className="flex space-x-4 gap-20">
        <div className="bg-gray-300 p-4 rounded-md text-center w-[280px] h-[190px] text-black font-semibold flex justify-center items-center">
          <p>This is Card 1</p>
        </div>
        <div className="bg-gray-300 p-4 rounded-md text-center w-[280px] h-[190px] text-black font-semibold flex justify-center items-center">
          <p>This is Card 2</p>
        </div>
        <div className="bg-gray-300 p-4 rounded-md text-center w-[280px] h-[190px] text-black font-semibold flex justify-center items-center">
          <p>This is Card 3</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
