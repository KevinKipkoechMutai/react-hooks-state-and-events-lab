import React from "react";

function Item({ name, category }) {
  //adding function to toggle between adding to cart and removing from cart
  const [inCart, setInCart] = React.useState(false)
  
  function handleCart() {
      setInCart(previousCart => !previousCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
