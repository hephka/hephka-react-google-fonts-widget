import React, { useState } from "react";
import FormText from "./forms/FormText";
import FormRange from "./forms/FormRange";
import CategoryFonts from "./fonts/CategoryFonts";

const Fonts = () => {
  const [size, setSize] = useState(20);
  const [text, setText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  );

  return (
    <div className="container min-vh-100">
      <div className="row my-5">
        <div className="col-lg-3">
          <div style={{ position: "sticky", top: 0 }}>
            <FormText text={text} setText={setText} />
            <FormRange size={size} setSize={setSize} />
          </div>
        </div>
        <div className="col-lg-9">
          <CategoryFonts
            sort="date"
            title="Les plus récentes"
            text={text}
            size={size}
          />
          <CategoryFonts
            sort="trending"
            title="Trending Fonts"
            text={text}
            size={size}
          />
          <CategoryFonts
            sort="popularity"
            title="Les plus populaires"
            text={text}
            size={size}
          />
        </div>
      </div>
    </div>
  );
};

export default Fonts;
