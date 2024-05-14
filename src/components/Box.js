import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div className="outline">
      <h2>{props.Data.title}</h2>
      <h5>{props.Data.des}</h5>

      <button>Add</button>
      <button>Remove</button>
    </div>
  );
};

export default Box;
