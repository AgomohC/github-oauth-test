import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./appSlice";
import Repos from "./Repos";

const mapThroughItems = (items) => {
   return items.map((item) => {
      return <Repos key={item.id} item={item} />;
   });
};

const NoRepo = () => {
   return <h2 className="no-repo">No Public Repos Found</h2>;
};
const Home = () => {
   const { repo } = useSelector((state) => state.app);
   const dispatch = useDispatch();

   return (
      <section id="home-section">
         <button className="logout-btn" onClick={dispatch(logOut())}>
            Log Out
         </button>
         {repo.length !== 0 ? mapThroughItems(repo) : <NoRepo />}
      </section>
   );
};

export default Home;
