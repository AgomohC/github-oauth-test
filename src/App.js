import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
   const { repo } = useSelector((state) => state.app);
   return repo ? children : <Navigate to="/login" />;
};

const app = () => {
   return (
      <>
         <Routes>
            <Route
               path="/"
               element={
                  <PrivateRoute>
                     <Home />
                  </PrivateRoute>
               }
            />
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   );
};

export default app;
