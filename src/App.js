import React, { useState } from "react";
import { Resizable } from "re-resizable";
import "./App.css";

const Box = ({ id, txt, width, height, onResize }) => (
  <Resizable
    defaultSize={{ width, height }}
    className="resizable_container"
    onResize={(e, direction, ref, d) => {
      console.log(e)
      console.log(direction)
      console.log(ref)
      console.log(d)
      onResize(id, d.width)}}
  >
    {txt}
  </Resizable>
);

const App = () => {
  const [boxes, setBoxes] = useState([
    { id: "001", width: "50%", height: "50%", txt: "001" },
    { id: "002", width: "50%", height: "50%", txt: "002" },
    { id: "003", width: "100%", height: "50%", txt: "003" },
  ]);

  const handleResize = (id, width) => {
    const updatedBoxes = boxes.map((box) =>
      box.id === id ? { ...box, width } : box
    );
    setBoxes(updatedBoxes);
  };

  return (
    <div className="app_wrapper">
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          txt={box.txt}
          width={box.width}
          height={box.height}
          onResize={handleResize}
        />
      ))}
    </div>
  );
};

export default App;
