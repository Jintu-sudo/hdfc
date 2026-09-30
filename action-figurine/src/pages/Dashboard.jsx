import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Dashboard() {
  return <ProductGrid products={products} />;
}
