import React from "react";

const BookingTypeSelect = ({
  label,
  options,
  name,
  register,
  onBlur,
  errors,
  touchedFields,
}) => {
  return (
    <div className=" mini:w-full w-[25%] ">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        onBlur={onBlur}
        {...register(name)}
        className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200">
        {options.map((option, index) => (
          <option key={index} value={option} className="bg-white text-gray-800">
            {option}
          </option>
        ))}
      </select>
      {errors[name] && touchedFields[name] && (
        <p className="mt-2 text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default BookingTypeSelect;
