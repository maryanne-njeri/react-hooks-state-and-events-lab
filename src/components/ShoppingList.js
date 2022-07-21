import React, { useState } from "react";
import Item from "./Item";
function ShoppingList({ items }) {
  const [categ, setCateg] = useState("All")
  const something = items.filter(item => {
    if(categ === "All"){
    return true
    }else{
    return categ === item.category
  }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={event => setCateg(event.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {something.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;