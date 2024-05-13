import React from "react";
import Box from "./Box";

const Board = (props) => {
  return (
    <>
      {props.Data.map((item) => {
        return <Box key={item.title} Data={item} />;
      })}
    </>
  );
};

export default Board;
