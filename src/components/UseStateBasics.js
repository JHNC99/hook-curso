import React, { useState } from "react";
import { Fragment } from "react";
const UseStateBasics = () => {
  const [text, setText] = useState("UseStateValue");
  const handClick = () => {
    setText("Hello world");
  };
  return (
    <Fragment>
      <h2 className="text-center">{text}</h2>
      <button className="btn btn-outline-primary" onClick={handClick}>
        Change tilte
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
