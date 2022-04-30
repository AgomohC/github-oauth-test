import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const app = () => {
   return (
      <>
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   );
};

export default app;
