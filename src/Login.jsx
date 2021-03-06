import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "./appSlice";

const BtnContent = () => {
   return (
      <>
         <img
            alt="github icon"
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
         />
         Login with GitHub
      </>
   );
};

const Login = () => {
   const { loading, repo } = useSelector((state) => state.app);
   const dispatch = useDispatch();
   const clientID = "171318aa25325d940e29";

   const redirectUrl = "https://github-oauth-test.vercel.app/login";

   useEffect(() => {
      const code =
         window.location.href.match(/\?code=(.*)/) &&
         window.location.href.match(/\?code=(.*)/)[1];
      console.log(code);

      if (!code) return;

      dispatch(loginUser(code));
   }, [dispatch]);

   return (
      <>
         {repo && <Navigate to="/" />}
         <section id="login-section">
            <article className="login">
               <h1 className="welcome-text">Welcome</h1>
               <a
                  href={`https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user&redirect_uri=${redirectUrl}`}
                  disabled={loading}
                  className="login-btn"
                  target="_blank"
                  rel="noreferrer"
               >
                  {!loading ? (
                     <BtnContent />
                  ) : (
                     <>
                        <img
                           alt="loading icon"
                           src="https://img.icons8.com/ios-glyphs/30/000000/loading.png"
                           className="loading"
                        />
                        Loading...
                     </>
                  )}
               </a>
            </article>
         </section>
      </>
   );
};

export default Login;
