"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#f5f5f5",
          aspectRatio: "3 / 4",
        }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />

        {!product.inStock && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#111",
              color: "#fff",
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "20px",
            }}
          >
            Out of Stock
          </span>
        )}
      </div>

      <div style={{ marginTop: "12px" }}>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "2px" }}>
          {product.category}
        </p>
        <h3 style={{ fontSize: "15px", fontWeight: 500 }}>{product.name}</h3>
        <p style={{ fontSize: "15px", fontWeight: 600, marginTop: "4px" }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}