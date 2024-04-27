import React from "react";

const SidebarReviewDetails = ({ totalPrice }) => {
  return (
    <section className="bg-[#000B2E] text-gray-600 text-sm h-fit p-5 rounded-sm w-[25%]">
      <h1 className="text-lg font-bold">Fare Summary</h1>
      <h4 className="font-semibold">Base Fare</h4>
      <div className="flex border-b pb-3 border-gray-300 justify-between text-gray-600 pl-2 ">
        <p>Adults (1 X {totalPrice})</p>
        <p className="">{totalPrice}</p>
      </div>
      <h4 className="font-semibold mt-3 ">Taxes and Surcharges</h4>
      <div className="flex justify-between text-gray-600 pl-2 pb-3 border-b border-black ">
        <p>Airline taxes and Surcharges</p>
        <p>₹ 0</p>
      </div>
      <div className="flex text-[16px] justify-between mt-3 font-bold ">
        <h1>Total Amount</h1>
        <h1>{totalPrice}</h1>
      </div>
    </section>
  );
};

export default SidebarReviewDetails;
