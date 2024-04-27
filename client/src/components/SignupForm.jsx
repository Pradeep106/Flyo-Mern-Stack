import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        data
      );
      console.log(response.data);
      navigate("/login");
      // Add success message or redirection if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling and display error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className={`w-full px-3 py-2 rounded-md text-gray-500  bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]  ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.name && <p className="text-red-500 mt-1">Name is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="  text-gray-700 block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className={`w-full px-3 py-2 rounded-md text-gray-500 bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.email && <p className="text-red-500 mt-1">Email is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: true })}
            className={`w-full px-3 py-2 text-gray-500 bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   rounded-md  ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-blue-500`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flextext-gray-500  bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   items-center pr-3 text-gray-400">
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 mt-1">Password is required</p>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {submitting ? "Submitting..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
