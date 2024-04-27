import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const flightSchema = yup.object().shape({
  airline: yup.string().required("Airline is required"),
  fromAirport: yup.string().required("From Airport is required"),
  toAirport: yup.string().required("To Airport is required"),
  departureDateTime: yup.date().required("Departure Date and Time is required"),
  arrivalDateTime: yup.date().required("Arrival Date and Time is required"),
  takeoffDateTime: yup.date().required("Takeoff Date and Time is required"),
  price: yup
    .number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
});

const FlightForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(flightSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/flights",
        data
      );
      console.log(response.data);
      // Add success message or redirection if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling and display error message to the user
    }
  };

  return (
    <div className="w-full  bg-[#000B2E]  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  mx-auto p-10 rounded-md bg-[#000B2E] ">
        <div className="flex gap-5 w-full">
          <div className="mb-4 w-full">
            <label
              htmlFor="airline"
              className="block text-sm font-medium text-gray-700">
              Airline
            </label>
            <input
              type="text"
              id="airline"
              {...register("airline")}
              className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.airline && (
              <span className="text-red-500">{errors.airline.message}</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="fromAirport"
              className="block text-sm font-medium text-gray-700">
              From Airport
            </label>
            <input
              type="text"
              id="fromAirport"
              {...register("fromAirport")}
              className="mt-1 block w-full text-gray-500 bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.fromAirport && (
              <span className="text-red-500">{errors.fromAirport.message}</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="toAirport"
              className="block text-sm font-medium text-gray-700">
              To Airport
            </label>
            <input
              type="text"
              id="toAirport"
              {...register("toAirport")}
              className="mt-1 block w-full text-gray-500 bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.toAirport && (
              <span className="text-red-500">{errors.toAirport.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-5">
          <div className="mb-4 w-full">
            <label
              htmlFor="departureDateTime"
              className="block text-sm font-medium text-gray-700">
              Departure Date and Time
            </label>
            <Controller
              name="departureDateTime"
              control={control}
              render={({ field }) => (
                <input
                  type="datetime-local"
                  {...field}
                  className="mt-1 block text-gray-700 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              )}
            />
            {errors.departureDateTime && (
              <span className="text-red-500">
                {errors.departureDateTime.message}
              </span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="arrivalDateTime"
              className="block text-sm font-medium text-gray-700">
              Arrival Date and Time
            </label>
            <Controller
              name="arrivalDateTime"
              control={control}
              render={({ field }) => (
                <input
                  type="datetime-local"
                  {...field}
                  className="mt-1 block text-gray-700 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              )}
            />
            {errors.arrivalDateTime && (
              <span className="text-red-500">
                {errors.arrivalDateTime.message}
              </span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="takeoffDateTime"
              className="block text-sm font-medium text-gray-700">
              Takeoff Date and Time
            </label>
            <Controller
              name="takeoffDateTime"
              control={control}
              render={({ field }) => (
                <input
                  type="datetime-local"
                  {...field}
                  className="mt-1 block  text-gray-700  w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              )}
            />
            {errors.takeoffDateTime && (
              <span className="text-red-500">
                {errors.takeoffDateTime.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="mb-4 w-[30%]">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price")}
              className="mt-1 block w-full text-gray-500 bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex w-[30%] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
