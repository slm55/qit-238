import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import { useState } from "react";
import TodoList from "./pages/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Wrapper from "./components/Wrapper";
import { CartProvider } from "./contexts/CartContext";
import { LangProvider } from "./contexts/LangContext";
import Modal from "./components/Modal";
function App() {
  return (
    <div>
      <LangProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Modal />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LangProvider>
    </div>
  );
}

export default App;
