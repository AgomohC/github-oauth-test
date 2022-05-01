import React from "react";
import { useSelector } from "react-redux";
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
   const { repo, loading } = useSelector((state) => state.app);

   return (
      <section id="home-section">
         {repo.length !== 0 ? mapThroughItems(repo) : <NoRepo />}
      </section>
   );
};

export default Home;
