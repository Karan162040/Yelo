import React, { useRef } from "react";

const Card = (props) => {
  const inputTitleRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: inputTitleRef.current.value,
      des: inputDescriptionRef.current.value,
    };
    props.DataHandler(data);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        Title:
        <input type="text" ref={inputTitleRef} />
      </label>
      <label>
        Description:
        <textarea ref={inputDescriptionRef} />
      </label>
      <button type="submit">Add Card</button>
      <button onClick={props.showCardHandler}>Cancel</button>
    </form>
  );
};

export default Card;
