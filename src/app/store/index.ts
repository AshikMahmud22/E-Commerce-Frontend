import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice";
import compareReducer from "./slices/compareSlice";
import uiReducer from "./slices/uiSlice";
// import wishlistReducer from "./slices/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      compare: compareReducer,
      ui: uiReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];