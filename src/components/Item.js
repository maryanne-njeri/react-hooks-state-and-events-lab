import React, { useState } from "react";

function Item({ name, category }) {

const [ inCart, setInCart ] = useState(false);

const handleCart = () => {
  setInCart (!inCart);
}

  return (
    <li className={inCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="" onClick={ handleCart }>{inCart ? "remove" : "add" }</button>
    </li>
  );
}

export default Item;
