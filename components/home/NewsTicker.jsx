import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FiZap } from "react-icons/fi";

export default function NewsTicker() {
  const items = [...products, ...products];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#111",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#c0392b",
          padding: "10px 18px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "1px",
          flexShrink: 0,
          zIndex: 2,
        }}
      >
        <FiZap size={14} />
        JUST IN
      </span>

      <div
        style={{
          overflow: "hidden",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "ticker-scroll 30s linear infinite",
          }}
        >
          {items.map((product, index) => (
            <span
              key={`${product.id}-${index}`}
              style={{
                padding: "10px 28px",
                fontSize: "13px",
                whiteSpace: "nowrap",
                borderRight: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {product.name} — {formatPrice(product.price)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}