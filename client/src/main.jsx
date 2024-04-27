import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FlightSearch from "./pages/FlightSearch.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import SignupPage from "./pages/Signup.jsx";
import LoginForm from "./pages/Login.jsx";
import FlightForm from "./pages/FlightForm.jsx";
import AirportForm from "./pages/Aiport.jsx";
import AirlineForm from "./pages/Airline.jsx";
import GetFlightData from "./pages/GetFlightData.jsx";
import GetAirortData from "./pages/GetAiportData.jsx";
import AdminSidebar from "./pages/Admin.jsx";
import Payment from "./pages/Payment.jsx";
import Booking from "./pages/getBooking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flight-search",
        element: <FlightSearch />,
      },
      {
        path: "/reviewDetails",
        element: <ReviewDetails />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/getBooking",
        element: <Booking />,
      },
      {
        path: "/admin",
        element: <AdminSidebar />,
        children: [
          {
            path: "", // Relative path
            element: <GetFlightData />,
          },
          {
            path: "createAirline", // Relative path
            element: <AirlineForm />,
          },
          {
            path: "createAirport", // Relative path
            element: <AirportForm />,
          },
          {
            path: "createFlight", // Relative path
            element: <FlightForm />,
          },
          {
            path: "getAirportData", // Relative path
            element: <GetAirortData />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
