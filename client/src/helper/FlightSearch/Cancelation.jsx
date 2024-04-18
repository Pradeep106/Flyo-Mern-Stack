import React from "react";

const Cancelation = () => {
  return (
    <div className="border p-5">
      <table className="border border-gray-300">
        <thead className="border">
          <tr className="border ">
            <th className="border text-sm p-3 border-gray-300">
              <span>Time frame</span>
              <span>(From Scheduled flight departure)</span>
            </th>
            <th className="text-sm p-3">
              <span className="">Airline Fee + MMT Fee + Fare difference</span>
              <span className="">(Per passenger)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-sm">0 hours to 2 hours*</td>
            <td className="text-sm p-2">ADULT : Non Changeable</td>
          </tr>
          <tr>
            <td className="border p-2 text-sm">2 hours to 365 days*</td>
            <td className="border text-sm p-2">ADULT : ₹ 3,000 + ₹ 300 + Fare difference</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-5">*From the Time of Departure

</p>
    </div>
  );
};

export default Cancelation;
