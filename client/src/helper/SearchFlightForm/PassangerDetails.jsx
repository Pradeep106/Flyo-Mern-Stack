import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const PassengerDetails = ({
  fields,
  decrementCount,
  incrementCount,
  onBlur,
  touchedFields,
  errors,
  open,
}) => {
  return (
    <div
      className={`border ${
        open ? "hidden" : "inline-block"
      } top-14 left-[30%]  bg-white absolute z-30 shadow-lg shadow-gray-200 rounded-lg mini:top-32 mini:left-0 mini:w-[100%] w-[30%] border-gray-200 `}>
      {fields.map((passenger, index) => (
        <div key={passenger.id} className=" p-4 rounded">
          <div className="flex justify-between items-center ">
            <span className="font-bold capitalize">{passenger.category}</span>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => decrementCount(index)}
                className="text-sm px-2 p-2 bg-gray-200 rounded-full"
                onBlur={onBlur}>
                <FiMinus />
              </button>
              <span className="mx-2">{passenger.count}</span>
              <button
                type="button"
                onClick={() => incrementCount(index)}
                className="text-sm px-2 py-2 bg-gray-200 rounded-full"
                onBlur={onBlur}>
                <FiPlus />
              </button>
            </div>
          </div>
          {/* Validation errors */}
          {(touchedFields[`passengers[${index}].category`] ||
            Object.keys(errors).length > 0) &&
            errors.passengers?.[index]?.category && (
              <p className="text-red-500">
                {errors.passengers[index].category.message}
              </p>
            )}
          {(touchedFields[`passengers[${index}].count`] ||
            Object.keys(errors).length > 0) &&
            errors.passengers?.[index]?.count && (
              <p className="text-red-500">
                {errors.passengers[index].count.message}
              </p>
            )}
        </div>
      ))}
    </div>
  );
};

export default PassengerDetails;
