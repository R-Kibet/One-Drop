import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRed: (state, action) => {
      console.log(action.payload.data);
      //state = action.payload.data
      state._id = action.payload.data._id;
      state.email = action.payload.data.email;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.image = action.payload.data.image;
    },

    logoutRed: (state, action) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.image = "";
    },
  },
});

export const { loginRed , logoutRed} = userSlice.actions;
export default userSlice.reducer;
