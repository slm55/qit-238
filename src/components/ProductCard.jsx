import React, { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../App.css";
import CartContext from "../contexts/CartContext";

function ProductCard({ product }) {
  const like = false;
  const [hover, setHover] = useState(false);
  const { cart, addProduct, removeProduct, updateProductQuantity, inCart, getProductQuantity } = useContext(CartContext);
  const isInCart = inCart(product.id);
  const quantity = getProductQuantity(product.id);

  function increase() {
    updateProductQuantity(product.id, quantity + 1);
  }

  function decrease() {
    updateProductQuantity(product.id, quantity > 0? quantity - 1 : 0);
  }

  function addToCart() {
    addProduct(product)
  }

  return (
    <div
      className="card"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <h1 style={{ color: hover ? "green" : "black" }}>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price} ₸</p>
      {product.stock > 0 && (
        <p style={{ color: product.stock >= 70 ? "green" : "yellow" }}>
          Available
        </p>
      )}

      <img src={product.thumbnail} alt={product.title} />
      {!isInCart && (
        <button onClick={addToCart}>Добавить</button>
      )}
      {isInCart && (
        <div>
          <button onClick={decrease}>-</button>
          {quantity}
          <button onClick={increase}>+</button>
        </div>
      )}
      <FavoriteIcon
        onClick={() => like = !like}
        style={{ color: like ? "red" : "black" }}
      />
    </div>
  );
}

export default ProductCard;
