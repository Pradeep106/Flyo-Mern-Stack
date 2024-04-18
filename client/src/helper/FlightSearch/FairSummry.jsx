import React from "react";

const FareBreakup = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Fare Breakup</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between">
          <span className="font-semibold">TOTAL</span>
          <span className="font-semibold">₹ 6,373</span>
        </div>
        <div className="flex justify-between">
          <span>Base Fare</span>
          <span>₹ 5,600</span>
        </div>
        <div className="flex justify-between">
          <span>Surcharges</span>
          <span>₹ 773</span>
        </div>
      </div>
    </div>
  );
};

export default FareBreakup;
