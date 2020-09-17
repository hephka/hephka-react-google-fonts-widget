import React from "react";

const Article = (props) => {

    const {name, variants, link, category} = props

  return (
        <article className="col-lg-6 mb-3">
          <div className="shadow p-3">
            <h2 className="h6 d-flex align-items-center justify-content-between">
              <span>{name}</span>
              <small>{variants} variant(s)</small>
            </h2>
            <p>
              <span className="badge bg-dark">{category}</span>
            </p>
            <p className="sample" /* AJOUTER STYLE */>(appel du textarea)</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-danger"
              href={link}
            >
              Voir sur Google Fonts (ouvre un nouveau tab)
            </a>
          </div>
        </article>
      )}

export default Article;
