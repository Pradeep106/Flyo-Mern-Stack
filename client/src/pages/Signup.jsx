// SignupPage.js
import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  const onSubmit = (data) => {
    console.log(data); // Here you can handle form submission, like sending data to the server
  };

  return (
    <div className="min-h-screen w-full  gradient-custom  flex items-center justify-center bg-[#000B2E]">
      <div className=" p-8 rounded-lg w-[40%] bg-[#000B2E] mt-20 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">Sign Up</h2>
        <SignupForm onSubmit={onSubmit} />
        <p className="text-center mt-3 text-gray-700">
          Already have account?{" "}
          <Link to="/login">
            <span className="text-blue-500 underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
