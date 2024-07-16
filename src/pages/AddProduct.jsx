import React, { useState } from 'react'
function AddProduct() {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState("");

    function addProduct(e) {
        e.preventDefault();
        setProducts([...products, { title, brand, price }])
        setTitle("");
        setPrice(0);
        setBrand("");
    }

  return (
    <div>
    <h1>Add Product</h1>
    <form>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
        <button onClick={addProduct}>Add the product</button>
    </form>
    <div>
        Products list
        {products.map(p => (
            <div>
            {p.title} - {p.price} - {p.brand}
            </div>
        ))}
    </div>
    </div>
  )
}

export default AddProduct