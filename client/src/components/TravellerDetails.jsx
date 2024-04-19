import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CountryCode } from "../constant/CountryCode";
import Select from "react-select";

const schema = yup.object().shape({
  travelers: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      gender: yup.string().required("Gender is required"),
      countryCode: yup.string().required("Country code is required"),
      mobileNo: yup.string().required("Mobile number is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
    })
  ),
});

const TravelerDetail = () => {
  const [count, setCount] = useState(1);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      travelers: Array.from({ length: count }).map(() => ({
        firstName: "",
        lastName: "",
        gender: "",
        countryCode: "",
        mobileNo: "",
        email: "",
      })),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAddUser = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Traveler Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-3 mini:grid-cols-1 sm:grid-cols-1 gap-4">
            <Controller
              name={`travelers[${index}].firstName`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="First Name"
                />
              )}
            />
            <Controller
              name={`travelers[${index}].lastName`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Last Name"
                />
              )}
            />
            <Controller
              name={`travelers[${index}].gender`}
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="border border-gray-300  rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            />
            <Controller
              name={`travelers[${index}].countryCode`}
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  placeholder="Select Country Code"
                  className="border border-gray-300  rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                  {CountryCode.map((country) => (
                    <option key={country.name} value={country.dial_code}>
                      {country.name}
                      {country.dial_code}
                    </option>
                  ))}
                </select>
              )}
            />

            <Controller
              name={`travelers[${index}].mobileNo`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Mobile No."
                />
              )}
            />
            <Controller
              name={`travelers[${index}].email`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              )}
            />
          </div>
        ))}
        {errors.travelers && (
          <p className="text-red-500">{errors.travelers.message}</p>
        )}
        {/* {count < 3 && (
          <button
            type="button"
            onClick={handleAddUser}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">
            Add User
          </button>
        )} */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-green-600">
          Continue
        </button>
      </form>
    </div>
  );
};

export default TravelerDetail;
