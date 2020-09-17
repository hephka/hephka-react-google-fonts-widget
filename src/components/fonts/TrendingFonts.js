import React, {useState, useEffect} from "react";

const TrendingFonts = () => { 

  const [trendingFonts, setTrendingFonts] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_GOOGLE_FONTS_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=trending`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("police introuvable");
      })
      .then((data) => {
        setTrendingFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="row mb-5">
      <hr />
      <h2 className="mb-3">
        <span className="badge bg-danger">Trending Fonts</span>
      </h2>
      {trendingFonts.map((el) => {
        return (
          <article className="col-lg-6 mb-3">
          <div className="shadow p-3">
            <h2 className="h6 d-flex align-items-center justify-content-between">
              <span>{el.family}</span>
              <small>{el.variants.length} variant(s)</small>
            </h2>
            <p>
              <span className="badge bg-dark">{el.category}</span>
            </p>
            <p className="sample" /* AJOUTER STYLE */>(appel du textarea)</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-danger"
              href={`https://fonts.google.com/specimen/${el.family}`}
            >
              Voir sur Google Fonts (ouvre un nouveau tab)
            </a>
          </div>
        </article>
        )
      })}
    </section>
  );
};

export default TrendingFonts;
