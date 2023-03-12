import "./App.css";
import { useState } from "react";

const checkboxLabels = [
  { label: "Option 1", checked: false },
  { label: "Option 2", checked: false },
  { label: "Option 3", checked: false },
  { label: "Option 4", checked: false },
  { label: "Option 5", checked: false },
  { label: "Option 6", checked: false },
  { label: "Option 7", checked: false },
];

function App() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState([]);
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    // when checkbox is checked, add one to number
    if (e.target.checked) {
      setNumber(number + 1);
    }
    // when checkbox is unchecked, subtract one from number
    if (!e.target.checked) {
      setNumber(number - 1);
    }
    // add the label of the checkbox to the select element
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    }
    // remove the label of the checkbox from the select element
    if (!e.target.checked) {
      setSelected(selected.filter((item) => item !== e.target.value));
    }
  };
  const handleSelectAll = (e) => {
    // when select all is checked, add all the labels to the select element
    if (e.target.checked) {
      setNumber(checkboxLabels.length);
      setSelected(checkboxLabels.map((item) => item.label));
    }
    // when select all is unchecked, remove all the labels from the select element
    if (!e.target.checked) {
      setNumber(0);
      setSelected([]);
    }
    // when select all is checked, check all the checkboxes
    if (e.target.checked) {
      setChecked(true);
    }
    // when select all is unchecked, uncheck all the checkboxes
    if (!e.target.checked) {
      setChecked(false);
    }
  };
  return (
    <div className="App">
      <h1>Challenge 3</h1>
      <h2>Multi-Select</h2>
      <select>
        <option value="AL" type="radio">
          {number} Selected
        </option>
        {selected.map((item) => (
          <option key={`${item + 1}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="options">
        <p>Search States</p>
        <label htmlFor="all">
          <input type="checkbox" onChange={handleSelectAll} checked={checked} />
          Select All
        </label>
        {checkboxLabels.map((label) => (
          <label htmlFor={label.label} key={label.label}>
            <input
              type="checkbox"
              onChange={handleChange}
              value={label.label}
            />
            {label.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;
