import React from "react";
import RecentFonts from "./fonts/RecentFonts";
import TrendingFonts from "./fonts/TrendingFonts";
import PopularFonts from "./fonts/PopularFonts";

const Fonts = () => {

  return (
    <div className="col-lg-9">
      <RecentFonts />
      <TrendingFonts />
      <PopularFonts />
    </div>
  );
}

export default Fonts
