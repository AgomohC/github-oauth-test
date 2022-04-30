import React from "react";
import { useSelector } from "react-redux";

const BtnContent = () => {
   return (
      <>
         <img
            src="https://img.icons8.com/windows/32/000000/github-squared.png"
            alt="github icon"
         />
         Login with GitHub
      </>
   );
};

const Login = () => {
   const { loading } = useSelector((state) => state.app);

   return (
      <section id="login-section">
         <article className="login">
            <h1 className="welcome-text">Welcome</h1>
            <button disabled={loading} className="login-btn">
               {!loading ? <BtnContent /> : "Loading..."}
            </button>
         </article>
      </section>
   );
};

export default Login;
