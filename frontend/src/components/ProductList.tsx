import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products`).then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      {products.map((product:any) => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
        
      ))}
    </div>
    
  );
};

export default ProductList;