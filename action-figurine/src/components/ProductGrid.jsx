import ProductCard from "./ProductCard";

export default function ProductGrid({ products, title = "Shop Action Figures" }) {
  return (
    <div className="product-section">
      <h1>{title}</h1>
      <div className="card-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
