import "./App.css";
import { useState } from "react";

function App() {
  const [dots, setDots] = useState([]);
  const [removalHistory, setRemovalHistory] = useState([]);

  const handleClick = (event) => {
    const { left, top } = event.target.getBoundingClientRect();
    const x = event.pageX - left - window.scrollX;
    const y = event.pageY - top - window.scrollY;

    setDots((prev) => [...prev, { x, y }]);
  };
  const Undo = () => {
    //when undo is clicked, the last dot is removed from the dots array and added to the removalHistory array
    removalHistory.push(dots.pop());
    //now the dots array is updated
    setDots([...dots]);
    //now the removalHistory array is updated
    setRemovalHistory([...removalHistory]);
  };
  const Redo = () => {
    //when redo is clicked, the last dot is removed from the removalHistory array and added to the dots array
    dots.push(removalHistory.pop());
    //now the dots array is updated
    setDots([...dots]);
    //now the removalHistory array is updated
    setRemovalHistory([...removalHistory]);
  };
  const maxX = Math.max(...dots.map((dot) => dot.x), 0);
  const maxY = Math.max(...dots.map((dot) => dot.y), 0);

  return (
    <div className="App">
      <div className="head">
        <h1>Challenge 2</h1>
        <div className="desc">
          <p>
            This challenge about creating dots when you click on the screen. you
            can also undo and redo the dots.
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="undo" onClick={Undo}>
          Undo
        </button>
        {removalHistory.length > 0 && (
          <button className="redo" onClick={Redo}>
            Redo
          </button>
        )}
      </div>
      <div
        className="area"
        onClick={handleClick}
        style={{
          minHeight: `${maxY}px`,
          minWidth: `${maxX}px`,
          position: "relative",
        }}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className="dot"
            style={{ top: `${dot.y}px`, left: `${dot.x}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
