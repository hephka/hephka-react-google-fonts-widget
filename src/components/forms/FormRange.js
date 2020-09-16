import React from "react";

const FormRange = () => {
  return (
    <>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de la police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        value="20"
      />
    </>
  );
};

export default FormRange;
