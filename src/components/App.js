import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // const [ isTrue ] = useState(isTrue);
  // this will be used for the Dark Mode Toggle feature
  const [ isTrue, setIsTrue ] = useState(false);
  const appClass = isTrue ? "App dark" : "App light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => {setIsTrue(!isTrue)}}>{isTrue ? "Dark mode" : "light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
