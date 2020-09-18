import React from "react";

const FontCard = (props) => {
  const { family, variants, category, text, size } = props;

  return (
    <article className="col-lg-6 mb-3">
      <div className="shadow p-3">
        <h2 className="h6 d-flex align-items-center justify-content-between">
          <span>{family}</span>
          <small>{variants.length} variant(s)</small>
        </h2>
        <p>
          <span className="badge bg-dark">{category.toUpperCase()}</span>
        </p>
        <p
          className="sample"
          style={{ fontFamily: `${family}`, fontSize: `${size}px` }}
        >
          {text}
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="text-danger"
          href={`https://fonts.google.com/specimen/${family.replace(
            / /g,
            "+"
          )}`}
        >
          Voir sur Google Fonts (ouvre un nouveau tab)
        </a>
      </div>
    </article>
  );
};

export default FontCard;
