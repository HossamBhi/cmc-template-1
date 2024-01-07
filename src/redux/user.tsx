import { createSlice } from "@reduxjs/toolkit";

type userProps = null | {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    avatar_original: null | string;
    phone: null | string;
  };
};
const initialState: {
  logedUser: userProps;
} = {
  logedUser: null,
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAction: (state, { payload }) => payload,
  },
});

export const { setUserAction } = user.actions;
export default user.reducer;
