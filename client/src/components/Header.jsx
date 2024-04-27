import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const userEmail = localStorage.getItem("email");
    console.log("usermeaim", userEmail);

    if (userEmail === "pradp137@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/getBooking");
    }
  };

  return (
    <header className="border absolute w-[92%] top-5 left-[4%]  border-[#263665] px-5 py-3 rounded-full bg-[#0311398f]">
      <nav>
        <ul className="flex text-white justify-between ">
          <Link to="/">
            <li className="font-bold text-3xl">Flyo</li>
          </Link>
          <div className="flex items-center gap-10">
            <Link to="/support">
              <li>Support</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            {isAuthenticated && (
              <button onClick={handleProfileClick}>
                <FaUserCircle className="text-lg" />
              </button>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
