import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [isFilter, setIsFilter] = useState('All');

const filterFunction = items.filter(item => {
  if (isFilter === 'All') {
    return true;
  } else {
    return isFilter === item.isFilter;
  }
})


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={event => setIsFilter(event.target.value) }>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterFunction.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
