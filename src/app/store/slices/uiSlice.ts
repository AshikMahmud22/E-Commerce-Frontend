import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DrawerType =
  | "none"
  | "mobile-menu"
  | "cart";

interface UIState {
  activeDrawer: DrawerType;
}

const initialState: UIState = {
  activeDrawer: "none",
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    openDrawer(
      state,
      action: PayloadAction<Exclude<DrawerType, "none">>
    ) {
      state.activeDrawer = action.payload;
    },

    closeDrawer(state) {
      state.activeDrawer = "none";
    },

    toggleDrawer(
      state,
      action: PayloadAction<Exclude<DrawerType, "none">>
    ) {
      state.activeDrawer =
        state.activeDrawer === action.payload
          ? "none"
          : action.payload;
    },

    closeAll(state) {
      state.activeDrawer = "none";
    },
  },
});

export const {
  openDrawer,
  closeDrawer,
  toggleDrawer,
  closeAll,
} = uiSlice.actions;

export default uiSlice.reducer;