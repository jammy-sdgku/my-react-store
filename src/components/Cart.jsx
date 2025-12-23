import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "/src/Cart.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart ({totalItems} items)</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-quantity">
                Quantity: {item.quantity}
              </span>
            </div>
            <span className="cart-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="btn btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
