import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveHealthToStorage = async (health) => {
  try {
    await AsyncStorage.setItem("health", JSON.stringify(health));
  } catch (error) {
    console.log("Sağlık kaydedilirken bir hata oluştu:", error);
  }
};

const loadHealthFromStorage = async () => {
  try {
    const health = await AsyncStorage.getItem("health");
    return health !== null ? JSON.parse(health) : 3;
  } catch (error) {
    console.log("Sağlık yüklenirken bir hata oluştu:", error);
    return 3;
  }
};

export const healthSlice = createSlice({
  name: "health",
  initialState: {
    currentHealth: 3,
  },
  reducers: {
    decreaseHealth: (state) => {
      state.currentHealth -= 1;
      saveHealthToStorage(state.currentHealth);
    },
    increaseHealth: (state, action) => {
      state.currentHealth += action.payload;
      saveHealthToStorage(state.currentHealth);
    },
    setHealth: (state, action) => {
      state.currentHealth = action.payload;
      saveHealthToStorage(state.currentHealth);
    },
  },
});

export const { decreaseHealth, increaseHealth, setHealth } =
  healthSlice.actions;

export const initializeHealth = () => {
  return async (dispatch) => {
    const savedHealth = await loadHealthFromStorage();
    dispatch(setHealth(savedHealth !== null ? savedHealth : 3));
  };
};

export default healthSlice.reducer;
