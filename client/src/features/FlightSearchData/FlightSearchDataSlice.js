import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const flightSearchDataSlice = createSlice({
  name: "flightData", // Corrected slice name
  initialState,
  reducers: {
    updateFlightData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateFlightData } = flightSearchDataSlice.actions;
export default flightSearchDataSlice.reducer;
