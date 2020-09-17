import React from "react";
import Article from './Article'

const TrendingFonts = (props) => {

  const { name, variants, link, category } = props

  return (
    <section className="row mb-5">
      <hr />
      <h2 className="mb-3">
        <span className="badge bg-danger">Trending Fonts</span>
      </h2>
      <Article name={name} variants={variants} link={link} category={category} />
    </section>
  );
};

export default TrendingFonts;
