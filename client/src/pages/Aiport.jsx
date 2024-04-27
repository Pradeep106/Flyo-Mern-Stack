import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { airportData } from "../constant/Airport";
import axios from "axios";

const airportSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  code: yup.string().required("Code is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});

const AirportForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(airportSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/airports",
        data
      );
      console.log(response.data);
      // Add success message or redirection if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling and display error message to the user
    }
  };

  // const data = airportData.map((value) => value.city);
  console.log("data airport", airportData);

  return (
    <div className="w-full bg-[#000B2E]  h-fit p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#000B2E] p-8 rounded-lg shadow-md">
        <div className="flex gap-5">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <div>{}</div>
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-600">
              Code
            </label>
            <input
              type="text"
              id="code"
              {...register("code")}
              className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.code && (
              <span className="text-red-500">{errors.code.message}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="mb-4 w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="country"
              {...register("country")}
              className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            {errors.country && (
              <span className="text-red-500">{errors.country.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AirportForm;
