// rfce
import React, { useContext, useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import LangContext from "../contexts/LangContext";
import Login from "./Login";
// import logo from "../assets/react.svg"
function Header() {
  const { cart } = useContext(CartContext);
  const { lang, changeLang } = useContext(LangContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <header>
      <nav>
        <li>
          <Link to="/">{lang == "en" ? "Home" : "Басты бет"}</Link>
        </li>
        <li>
          <Link to="/cart">{lang == "en" ? "Cart" : "Себет"}</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/add-product">Add product</Link>
        </li>
      </nav>
      <select onChange={(e) => changeLang(e.target.value)}>
        <option value="en">English</option>
        <option value="kz">Kazakh</option>
      </select>
      <div>Cart: {cart.length}</div>
      <button onClick={toggleModal}>Login</button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Login />
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
