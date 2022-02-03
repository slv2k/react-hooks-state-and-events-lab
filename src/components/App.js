import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeChange() {
    setDarkMode((darkMode) => !darkMode);
  }

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeChange}>{darkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;