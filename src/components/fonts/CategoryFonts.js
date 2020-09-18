import React from "react";
import FontsCard from "./FontsCard";
import GoogleFonts from "./GoogleFonts";
import GoogleFontLoader from "react-google-font-loader";

const CategoryFonts = (props) => {
  const { id, text, size, title, sort } = props;
  const { fonts } = GoogleFonts(sort);

  return (
    <section className="row mb-5">
      <hr />
      <GoogleFontLoader
        fonts={fonts.map((el) => ({
          font: el.family,
        }))}
      />
      <h2 id={id} className="mb-3">
        <span className="badge bg-danger">{title}</span>
      </h2>
      {fonts.map((font) => {
        return (
          <>
            <FontsCard key={font.family} text={text} size={size} {...font} />
          </>
        );
      })}
    </section>
  );
};

export default CategoryFonts;
