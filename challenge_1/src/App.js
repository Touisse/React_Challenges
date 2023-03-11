import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [itemsCount, setItemsCount] = useState(0); // set interval time in milliseconds
  const [lines, setLines] = useState([[2, 5], [5, 3], [5], [1, 3], [3]]);
  const handleInputChange = (e) => {
    setItemsCount(e.target.value);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    // Array with the least amount of sum of items
    const minLine = lines.reduce((prev, curr) => {
      return prev.reduce((a, b) => a + b, 0) < curr.reduce((a, b) => a + b, 0)
        ? prev
        : curr;
    });

    // Add item to the minLine array
    const newLines = [...lines];

    newLines[lines.indexOf(minLine)].push(itemsCount);

    setLines(newLines);
    setItemsCount(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) =>
        prev.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((value) => value > 0)
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <h1>React Challenge : 1</h1>
      <div className="desc">
        <p>
          This is a react fun Challenge : Adding items to the Store with the
          least amount of people waiting !
        </p>
      </div>

      <form onSubmit={handleAddItem}>
        <input
          type="number"
          value={itemsCount}
          placeholder="Enter item amount"
          onChange={handleInputChange}
        />
        <button>Add Item</button>
      </form>

      <div className="items">
        {lines.map((peoples, index) => (
          <div key={index} className="box">
            <ul>
              {peoples.map((person, index) => (
                <li key={index} className="person">
                  {person}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
