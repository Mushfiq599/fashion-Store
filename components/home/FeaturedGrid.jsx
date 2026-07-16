import { products } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";

export default function FeaturedGrid() {
  const featured = products.filter((p) => p.featured);

  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "28px" }}>
        Featured Picks
      </h2>
      <ProductGrid products={featured} loading={false} />
    </section>
  );
}