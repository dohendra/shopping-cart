import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item: any) => (
          <div key={item._id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
