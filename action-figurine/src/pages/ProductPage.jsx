import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice, getProductById } from "../data/products";
import "../styles/productpage.css";

const FALLBACK_DESCRIPTION =
  "Premium collectible action figure with fantastic detail and multiple points of articulation. A great addition to any collection.";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="product-page">
        <p>Product not found. <Link to="/dashboard">Back to shop</Link></p>
      </div>
    );
  }

  const safeQty = Math.max(1, Number(qty) || 1);

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.alt} />
      </div>

      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">{formatPrice(product.price)}</p>
        <p className="product-description">
          {product.description ?? FALLBACK_DESCRIPTION}
        </p>

        {product.details && (
          <ul className="product-meta">
            {product.details.map((d) => (
              <li key={d.label}>
                <strong>{d.label}:</strong> {d.value}
              </li>
            ))}
          </ul>
        )}

        <div className="quantity-selector">
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            id="qty"
            name="qty"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        <div className="product-actions">
          <button
            type="button"
            className="cart-btn"
            onClick={() => addToCart(product.id, safeQty)}
          >
            Add to cart 🛒
          </button>
          <button
            type="button"
            className="buy-btn"
            onClick={() => {
              addToCart(product.id, safeQty);
              navigate("/cart");
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
