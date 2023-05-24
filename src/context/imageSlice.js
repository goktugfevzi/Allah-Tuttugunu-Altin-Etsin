import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: {
      stone: false,
      tree: false,
      house: false,
      car: false,
    },
    selectedImage: "",
    allGold: false,
  },
  reducers: {
    setImageToGold: (state, action) => {
      state.images[action.payload] = true;
    },
    checkAllGold: (state) => {
      state.allGold = Object.values(state.images).every((value) => value);
    },
    
    resetAllGold: (state) => {
      Object.keys(state.images).forEach((key) => {
        state.images[key] = false;
      });
      state.allGold = false;
    },
  },
});

export const { setImageToGold, checkAllGold, resetAllGold } =
  imageSlice.actions;
export default imageSlice.reducer;
