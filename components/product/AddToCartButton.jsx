"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product, size, color }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, size, color);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product.inStock) {
    return (
      <button
        disabled
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "6px",
          border: "none",
          background: "#eee",
          color: "#999",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "not-allowed",
        }}
      >
        Out of Stock
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "6px",
        border: "none",
        background: added ? "#2e7d32" : "var(--accent)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "background 0.2s ease",
      }}
    >
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}