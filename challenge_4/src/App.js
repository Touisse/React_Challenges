import "./App.css";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "App dark" : "App"}>
      <h1>Challenge 4</h1>
      <div className="Container">
        <h1 style={{ color: `${dark ? "yellow" : "black"}` }}>
          Dark Mode Challenge
        </h1>
        {!dark ? (
          <FaMoon
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={darkMode}
          />
        ) : (
          <FaSun
            style={{ fontSize: "30px", cursor: "pointer", color: "yellow" }}
            onClick={darkMode}
          />
        )}
      </div>
      <div className={dark ? "texts dark" : "texts"}>
        <p>
          Lollipop powder powder. Cotton candy caramels chupa chups halvah
          muffin caramels apple pie topping cake. Topping chocolate bar pastry
          chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum.
          Chocolate bar lollipop candy canes. Biscuit croissant apple pie
          pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu
          chocolate bar carrot cake lemon drops halvah.
        </p>
        <p>
          Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart.
          Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan
          toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding
          sugar plum chocolate cake cake biscuit pastry pastry chocolate bar
          tart. Lemon drops dessert gummies icing.
        </p>
      </div>
      <div className={dark ? "darkInputs" : "inputs"}>
        <input
          type="text"
          placeholder="Name"
          className={dark ? "darkInpo" : "inpo"}
        />
        <input
          type="email"
          placeholder="Email"
          className={dark ? "darkInpo" : "inpo"}
        />
      </div>
      <div className="buttons">
        <button className="save">Save</button>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
