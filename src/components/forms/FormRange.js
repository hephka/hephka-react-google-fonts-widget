import React from "react";

const FormRange = (props) => {

  const {size, setSize} = props

  const handleRangeChange = (event) => {
    setSize(event.target.value)
  }

  return (
    <>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de la police
      </label>
      <input
        type="range"
        value={size}
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        onChange={handleRangeChange}
      />
    </>
  );
};

export default FormRange;
