import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
   "user/login",
   async (code, { rejectWithValue }) => {
      // `http://localhost:8080/api/${code}`
      try {
         const { data } = await axios(
            `https://rogue-stellar-pump.glitch.me/api/${code}`
         );
         console.log(data);
         return data;
      } catch (err) {
         return rejectWithValue(err.response.data);
      }
   }
);
const repo = JSON.parse(localStorage.getItem("repo"));

console.log(repo);
export const appSlice = createSlice({
   name: "app",
   initialState: {
      repo: repo ? repo.repos : null,
      loading: false,
      error: false,
      errorMessage: "",
   },
   reducers: {
      logOut: (state) => {
         state.repo = null;
         state.loading = false;
         state.error = false;
         state.errorMessage = "";
         localStorage.removeItem("repo");
      },
   },
   extraReducers: {
      [loginUser.pending]: (state) => {
         state.loading = true;
         state.error = false;
         state.repo = null;
         state.errorMessage = "";
      },
      [loginUser.fulfilled]: (state, action) => {
         localStorage.setItem("repo", JSON.stringify({ ...action.payload }));
         state.loading = false;
         state.error = false;
         state.repo = action.payload.repos;
         state.errorMessage = "";
      },
      [loginUser.rejected]: (state, action) => {
         state.loading = false;
         state.error = true;
         state.repo = null;
         state.errorMessage = action.payload.error;
      },
   },
});

export const { logOut } = appSlice.actions;
export default appSlice.reducer;
