import React, {useEffect, useState} from "react";
import RecentFonts from "./fonts/RecentFonts";
import TrendingFonts from "./fonts/TrendingFonts";
import PopularFonts from "./fonts/PopularFonts";

const Fonts = () => {

  const [font, setFont] = useState({})

  useEffect(() => {

    const API_KEY = process.env.REACT_APP_GOOGLE_FONTS_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;

    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("polices introuvable");
    })
    .then((data) => {
      for (let i=0; i < 10; i++) {
        setFont({
          name: data.items[i].family,
          variants: data.items[i].variants.length,
          link: `https://fonts.google.com/specimen/${data.items[i].family}`,
          category: data.items[i].category
        })
      }
      console.log(data.items.slice(0, 10))
      console.log(data.items[0].variants.length)
    })
    .catch(error => {
      console.log(error.message)
    }
    )
  }, [])

  return (
    <div className="col-lg-9">
      <RecentFonts name={font.name} variants={font.variants} link={font.link} category={font.category} />
      <TrendingFonts name={font.name} variants={font.variants} link={font.link} category={font.category} />
      <PopularFonts name={font.name} variants={font.variants} link={font.link} category={font.category} />
    </div>
  );
}

export default Fonts
