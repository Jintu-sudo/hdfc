import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import "../styles/cart.css";

export default function Cart() {
  const { items, subtotal, shipping, total, updateQty, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/dashboard">Continue Shopping</Link>
        </p>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.alt} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                </div>
                <div className="cart-item-qty">
                  <label htmlFor={`qty-${item.id}`}>Qty</label>
                  <input
                    type="number"
                    id={`qty-${item.id}`}
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value, 10))}
                  />
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button type="button" className="checkout-btn">Proceed to Checkout</button>
            <Link to="/dashboard" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}
