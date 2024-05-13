import { useState } from "react";
import Card from "./components/Card";
import Board from "./components/Board";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [Data, setData] = useState([]);

  const DataHandler = (item) => {
    setData((curr) => [...curr, item]);
    console.log(Data);
  };

  const showCardHandler = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <Board Data={Data} />
      {isClicked && (
        <Card showCardHandler={showCardHandler} DataHandler={DataHandler} />
      )}
      <button onClick={showCardHandler}>Add</button>
    </div>
  );
}

export default App;
