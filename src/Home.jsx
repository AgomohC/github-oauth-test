import React from "react";
import { useSelector } from "react-redux";
import Repos from "./Repos";

const mapThroughItems = (items) => {
   return items.map((item) => {
      return <Repos key={item.id} item={item} />;
   });
};
const Home = () => {
   const { repo, loading } = useSelector((state) => state.app);

   return <section id="home-section">{mapThroughItems(repo)}</section>;
};

export default Home;
