import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userPhoto = action.payload.userPhoto;
      state.userEmail = action.payload.userEmail;
      state.userUid = action.payload.userUid;
      state.user = action.payload;
    },
    setUserLogOut: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setUserLogOut, setActiveUser } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const userPhoto = (state) => state.user.userPhoto;
export const userUid = (state) => state.user.userUid;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
