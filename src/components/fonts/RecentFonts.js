import React from "react";
import Article from './Article'

const RecentFonts = (props) => { 

  const { name, variants, link, category } = props

  return (
    <section className="row mb-5">
      <hr />
      <h2 className="mb-3">
        <span className="badge bg-danger">Les plus récentes</span>
      </h2>
      <Article name={name} variants={variants} link={link} category={category} />
    </section>
  );
};

export default RecentFonts;
