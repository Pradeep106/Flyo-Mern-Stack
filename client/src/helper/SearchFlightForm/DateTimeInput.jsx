import React, { useEffect, useState } from "react";

const DateTimeInput = ({
  label,
  name,
  register,
  onBlur,
  touchedFields,
  errors,
}) => {
  const isEmpty = !touchedFields[name] && !errors[name];

  return (
    <div className="mb-4 cursor-pointer w-full">
      <label className="block text-gray-700">{label}</label>
      <input
        type="date"
        {...register(name)}
        onBlur={onBlur}
        className="mt-1 block text-gray-500 w-full bg-[#06133d] cursor-pointer  shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      {isEmpty ? null : <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default DateTimeInput;
