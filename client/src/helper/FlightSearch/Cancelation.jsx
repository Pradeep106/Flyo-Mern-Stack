import React from "react";

const Cancelation = () => {
  return (
    <div className="border border-gray-800 rounded-sm  p-5">
      <table className="border border-gray-800  ">
        <thead className="border border-gray-800  ">
          <tr className="border border-gray-800   ">
            <th className="border flex border-gray-800  flex-col  text-sm p-3">
              <span>Time frame</span>
              <span className="font-normal">(From Scheduled flight departure)</span>
            </th>
            <th className="text-sm p-3">
              <span className="">Airline Fee + MMT Fee </span>
              <span className="font-normal">(Per passenger)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-800  p-2 text-sm">0 hours to 2 hours*</td>
            <td className="text-sm p-2">ADULT : Non Changeable</td>
          </tr>
          <tr>
            <td className="border border-gray-800  p-2 text-sm">2 hours to 365 days*</td>
            <td className="border border-gray-800  text-sm p-2">ADULT : ₹ 3,000 + ₹ 300 + Fare difference</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-5">*From the Time of Departure

</p>
    </div>
  );
};

export default Cancelation;
