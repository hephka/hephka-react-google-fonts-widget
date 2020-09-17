import React from "react";
import FormText from "./forms/FormText";
import FormRange from "./forms/FormRange";

const Form = () => {
  return (
    <div className="col-lg-3">
      <div style={{ position: "sticky", top: "0px" }}>
        <FormText />
        <FormRange />
      </div>
    </div>
  );
};

export default Form;
