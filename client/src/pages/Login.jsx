import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { useDispatch } from "react-redux";

const LoginForm = () => {
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
        "http://localhost:8000/api/login",
        data
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.user.email)
      navigate("/");
      // Add success message or redirection if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling and display error message to the user
    }
  };

  return (
    <div className="min-h-screen pt-32 bg-[#000B2E]flex items-center justify-center gradient-custom">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-[#000B2E] p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`w-full text-gray-500  bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e] px-3 py-2 rounded-md  ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 mt-1">Email is required</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block  text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
              className={`w-full px-3 py-2 text-gray-500  bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e] rounded-md  ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 bg-[#06133d]">
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
        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
