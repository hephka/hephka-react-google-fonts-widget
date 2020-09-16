import React from "react";

const FormText = () => {
  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tappez votre text
      </label>
      <textarea
        id="text"
        className="form-control"
        style={{marginTop: "0px", marginBottom: "0px", height: "62px"}}
      >
        Portez ce vieux whisky au juge blond qui fume !? 0123456789
      </textarea>
    </div>
  );
};

export default FormText;
