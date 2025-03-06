import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

const initialState = {
  value: 0,
  length: sliderData.length,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      console.log("action", action);
      console.log("state", state);
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide(state, action) {
      const slide = action.payload;
      state.value = slide;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
