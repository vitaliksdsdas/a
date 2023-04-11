import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    id: "",
    token: "",
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    logOutUser(state){
        state.email = null
    }
  },
});

export const {setUser , logOutUser} = user.actions
export default user.reducer