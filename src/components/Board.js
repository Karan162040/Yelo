import React from "react";
import Box from "./Box";
import "./Board.css";

const Board = (props) => {
  return (
    <div className="papu">
      {props.Data.map((item) => {
        return <Box key={item.title} Data={item} />;
      })}
    </div>
  );
};

export default Board;
