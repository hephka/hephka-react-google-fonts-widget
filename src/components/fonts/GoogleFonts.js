import { useState, useEffect } from "react";

const GoogleFonts = (sort) => {
  const [fonts, setFonts] = useState([]);
  useEffect(() => {
    const ApiKey = process.env.REACT_APP_GOOGLE_FONTS_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=${sort}&key=${ApiKey}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Pas de police");
      })
      .then((data) => {
        console.log(data.items.slice(0, 10));
        setFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [sort]);
  return { fonts };
};

export default GoogleFonts;
