import { Link, Outlet } from "react-router-dom";
import AdminTab from "../components/AdminTab";
// import {
//   AiOutlineDashboard,
//   AiOutlineUser,
//   AiOutlineAirplane,
// } from "react-icons/ai";

const AdminSidebar = () => {
  return (
    <div className="w-full min-h-screen h-fit p-10  flex gap-10 pt-32 gradient-custom ">
      <nav className="bg-[#000B2E] h-fit rounded-md border shadow-sm shadow-[#07174e] border-[#07174e] w-64 px-4 py-6">
        <div className="text-white font-bold text-2xl mb-6 text-center">
          Admin Panel
        </div>
        <ul>
          <li className="mb-3">
            <Link
              to="/admin/createAirline"
              className="flex border px-3 py-1 rounded-md shadow-sm shadow-[#07174e] border-[#07174e] items-center text-white hover:text-gray-300">
              {/* <AiOutlineDashboard className="mr-2" /> */}
              Airline Create
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/createAirport"
              className="flex border px-3 py-1 rounded-md shadow-sm shadow-[#07174e] border-[#07174e] items-center text-white hover:text-gray-300">
              {/* <AiOutlineUser className="mr-2" /> */}
              Airport Create
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/createFlight"
              className="flex border px-3 py-1 rounded-md shadow-sm shadow-[#07174e] border-[#07174e] items-center text-white hover:text-gray-300">
              {/* <AiOutlineAirplane className="mr-2" /> */}
              Flights Create
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/getAirportData"
              className="flex border px-3 py-1 rounded-md shadow-sm shadow-[#07174e] border-[#07174e] items-center text-white hover:text-gray-300">
              {/* <AiOutlineAirport className="mr-2" /> */}
              Get Airports
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin"
              className="flex border px-3 py-1 rounded-md shadow-sm shadow-[#07174e] border-[#07174e] items-center text-white hover:text-gray-300">
              {/* <AiOutlineAirport className="mr-2" /> */}
              Get Flights
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminSidebar;
