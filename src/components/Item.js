import React, { useState } from "react";
function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const addToCart = () => {
    setInCart((isInCart) => !isInCart)
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={inCart ? "remove" : "add"}
        onClick={addToCart}
      >
        {inCart ? "Remove From" : "Add to"} Cart
        Add to Cart
        </button>
    </li>
  );
}
export default Item;