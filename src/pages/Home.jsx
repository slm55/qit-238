import React, { useState } from "react";
import { products } from "../assets/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

// list rendering
// conditional rendering
// ternary operator


function Home({cartSize, updateCartSize}) {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
    {/* <p style={{color: search.length > 8 ? "green" : "red"}}>Condition</p> */}
    {/* <select name="" id="" onChange={(e) => setCity(e.target.value)}>
      <option value="Almaty">Almaty</option>
      <option value="Astana">Astana</option>
    </select> */}
    {/* <div>City: {city}</div> */}
    {/* <input type="text" placeholder="City" value={city} name="" id="" onChange={(e) => setCity(e.target.value)} /> */}
    {/* <button onClick={() => setCity("Astana")}>Change city</button> */}
    <input type="search" name="" id="" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
    {/* <input type="date" name="" id="" onChange={(e) => setDate(e.target.value)} /> */}
    {/* {date} */}
{/* 
    <input type="email" placeholder="email" name="" id="" onChange={(e) => setEmail(e.target.value) }/>
    <input type="password" placeholder="password" name="" id="" onChange={(e) => setPassword(e.target.value) } />
    <button onClick={() => alert(email + " " + password)}>Login</button> */}

      <div className="cards">
          {
            products.filter(product => product.title.toLowerCase().startsWith(search.toLowerCase())).map((product) => {
              return <ProductCard cartSize={cartSize} updateCartSize={updateCartSize}  product={product} />;
            })
          }
      </div>
    </div>
  );
}

export default Home;

// Bestseller if rating > 4.5
// discountPercentage > 15 