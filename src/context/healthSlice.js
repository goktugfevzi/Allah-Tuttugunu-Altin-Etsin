import { createSlice } from "@reduxjs/toolkit";

export const healthSlice = createSlice({
  name: "health",
  initialState: {
    currentHealth: 3,
  },
  reducers: {
    decreaseHealth: (state) => {
      state.currentHealth -= 1;
    },
    increaseHealth: (state, action) => {
      state.currentHealth += action.payload;
    },
  },
});

export const { decreaseHealth, increaseHealth } = healthSlice.actions;
export default healthSlice.reducer;
