import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state:any) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item:any) => (
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;