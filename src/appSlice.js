import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080/api";
// axios.interceptors.request.use(function (req) {
//    const user = localStorage.getItem("user");

//    if (user) {
//       const { token } = JSON.parse(localStorage.getItem("user"));
//       req.headers.authorization = `Bearer ${token}`;
//       return req;
//    }
//    return req;
// });

const user = JSON.parse(localStorage.getItem("user"));

export const appSlice = createSlice({
   name: "app",
   initialState: {
      user: user ? user : null,
      loading: false,
   },
   reducers: {},
   extraReducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
