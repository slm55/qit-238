import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import CartContext from "../contexts/CartContext";

function Cart() {
  const {cart, removeProduct, updateProductQuantity} = useContext(CartContext);

  function getTotalQuantity() {
    let totalQuantity = 0;
    cart.forEach((product) => (totalQuantity += product.quantity));
    return totalQuantity;
  }

  return (
    <div className="cart">
      Cart - {getTotalQuantity()} items in cart
      {cart.map((product) => (
        <div>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <button
            onClick={() => {
              updateProductQuantity(product.id, product.quantity - 1);
            }}
          >
            -
          </button>
          <p>{product.quantity}</p>
          <button onClick={() => updateProductQuantity(product.id, product.quantity + 1)}>
            +
          </button>
          <button onClick={() => removeProduct(product.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
