import Link from "next/link";
import { products } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";

export default function FeaturedGrid() {
  const featured = products.filter((p) => p.featured);

  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "28px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: 600 }}>Featured Picks</h2>

        <Link
          href="/products"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#111",
            border: "1px solid #111",
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Show All
        </Link>
      </div>

      <ProductGrid products={featured} loading={false} />
    </section>
  );
}