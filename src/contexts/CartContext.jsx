import { useState, createContext, useEffect } from "react";

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  function addProduct(product) {
    const existingProduct = cart.find((p) => p.id == product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      setCart([...cart, {...product, quantity: 1 }]);
    }
  }

  function removeProduct(productId) {
    setCart(cart.filter((p) => p.id != productId));
  }

  function updateProductQuantity(productId, quantity) { 
    if (quantity <= 0) {
      removeProduct(productId);
    } else {
      const updatedCart = cart.map((p) =>
        p.id == productId ? {...p, quantity } : p
      );
      setCart(updatedCart);
    }
  }

  function inCart(productId) {
    return cart.some((p) => p.id == productId);
  }

  function getProductQuantity(productId) {
    const product = cart.find((p) => p.id == productId);
    return product? product.quantity : 0;
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductQuantity, inCart, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
