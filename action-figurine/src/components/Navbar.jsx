import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { count } = useCart();
  const { logout } = useAuth();

  return (
    <header>
      <nav className="navbar">
        <Link className="brand-logo" to="/dashboard">
          Action-Figurine
        </Link>
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/anime">Anime</Link></li>
          <li><Link to="/marvel">Marvel</Link></li>
          <li><Link to="/dc">DC</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>
            <Link to="/profile">
              <img src="/assets/profile.png" alt="Profile" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <img src="/assets/shopping-cart.png" alt="Cart" />
              {count > 0 && <span id="cart-count">{count}</span>}
            </Link>
          </li>
          <li>
            <Link to="/login" className="logout-btn" onClick={logout}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
