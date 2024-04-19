import React from "react";

const FareBreakup = () => {
  return (
    <div className="border flex-col border-gray-300 p-2 rounded-md ">
      <h2 className="text-xl font-semibold mb-4 text-left border-b border-gray-300 pb-2">Fare Breakup</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start   ">
          <div className="font-semibold w-96">TOTAL</div>
          <div className="font-semibold ">₹ 6,373</div>
        </div>
        <div className="flex justify-start ">
          <div className=" w-96">Base Fare</div>
          <div>₹ 5,600</div>
        </div>
        <div className="flex justify-start  ">
          <div className=" w-96">Surcharges</div>
          <div>₹ 773</div>
        </div>
      </div>
    </div>
  );
};

export default FareBreakup;
