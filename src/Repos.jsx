import React from "react";

const Repos = ({ item }) => {
   const {
      id,
      name,
      full_name,
      owner: { login },
      html_url,
      description,
      homepage,
   } = item;
   console.log(homepage);
   return (
      <article key={id}>
         <h3 className="article_name">{name.toUpperCase()}</h3>
         <h5 className="margin-top">{full_name}</h5>
         <p className="margin-top">{description}</p>
         <div className="btn-container margin-top">
            <a href={homepage || html_url}>View Project</a>
            <a href={html_url}>View Repo</a>
         </div>
         <p className="margin-top created">Created by {login}</p>
      </article>
   );
};

export default Repos;
