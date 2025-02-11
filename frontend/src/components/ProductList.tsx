import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Shop</h1>
        <button className="cart-button">Cart</button>
      </header>

      <div className="product-list">
        {products.map((product: any) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
