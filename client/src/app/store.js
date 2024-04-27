import { configureStore } from "@reduxjs/toolkit";
import flightDataReducer from "../features/FlightSearchData/FlightSearchDataSlice";
import authSlice from "../features/FlightSearchData/authSlice";
export const store = configureStore({
  reducer: {
    flightData: flightDataReducer,
    auth:authSlice,
  },
});
