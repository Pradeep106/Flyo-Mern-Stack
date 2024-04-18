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
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none">
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
