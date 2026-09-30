import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuy = () => {
    addToCart(product.id);
    navigate("/cart");
  };

  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.alt} />
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
      </Link>
      <button type="button" onClick={() => addToCart(product.id)}>
        Add to cart 🛒
      </button>
      <button type="button" className="buy-btn" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
}
