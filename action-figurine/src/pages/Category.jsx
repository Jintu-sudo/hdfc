import { Navigate, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { categories, getProductsByCategory } from "../data/products";

// Handles /anime, /marvel, /dc and /starwars with one component.
export default function Category() {
  const { category } = useParams();
  if (!categories[category]) return <Navigate to="/dashboard" replace />;

  return <ProductGrid products={getProductsByCategory(category)} />;
}
