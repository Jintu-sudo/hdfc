import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "action-figurine-cart";
export const SHIPPING = 5;

// cart shape: [{ id: "batman", qty: 2 }, ...]
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable – ignore */
    }
  }, [items]);

  const addToCart = (id, qty = 1) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id, qty }];
    });

  const updateQty = (id, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty || 1) } : i))
    );

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const value = useMemo(() => {
    const detailed = items
      .map((i) => ({ ...getProductById(i.id), qty: i.qty }))
      .filter((i) => i.name);
    const count = detailed.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = detailed.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = detailed.length ? SHIPPING : 0;
    return {
      items: detailed,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      addToCart,
      updateQty,
      removeFromCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
