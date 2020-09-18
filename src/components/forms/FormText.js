import React from "react";

const FormText = (props) => {

  const {text, setText} = props
  
  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tappez votre text
      </label>
      <textarea
        id="text"
        value={text}
        className="form-control"
        onChange={handleTextChange}
      >
      </textarea>
    </div>
  );
};

export default FormText;
