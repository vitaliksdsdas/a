import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  id: null,
  token: null,
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },

    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const {setUser , removeUser} = user.actions;

export default user.reducer;
