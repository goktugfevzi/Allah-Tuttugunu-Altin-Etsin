import { combineReducers } from "redux";
import imageReducer from "./imageSlice";
import healthSlice from "./healthSlice";

export default combineReducers({
  image: imageReducer,
  health: healthSlice,
});
