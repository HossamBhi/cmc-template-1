import { createSlice } from "@reduxjs/toolkit";

interface initiolStateProps {
  isLoad: boolean;
}
const initialState: initiolStateProps = {
  isLoad: false,
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showLoaderAction: (state) => {
      state.isLoad = true;
    },
    hideLoaderAction: (state) => {
      state.isLoad = false;
    },
  },
});

export const { showLoaderAction, hideLoaderAction } = popup.actions;
export default popup.reducer;
