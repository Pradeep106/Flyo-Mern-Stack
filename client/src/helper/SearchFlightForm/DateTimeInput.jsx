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
    <div className="mb-4  w-full">
      <label className="block font-bold ">{label}</label>
      <input
        type="date"
        {...register(name)}
        onBlur={onBlur}
        className=" border border-gray-300  p-2 w-full"
      />
      {isEmpty ? null : <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default DateTimeInput;
