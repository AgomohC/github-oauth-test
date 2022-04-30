import { configureStore } from "@reduxjs/toolkit";
import reducer from "./appSlice";

export default configureStore({
   reducer: {
      app: reducer,
   },
});
