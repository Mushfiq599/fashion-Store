// components/cart/CartSummary.jsx
"use client";

import { formatPrice } from "@/lib/format";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function CartSummary({ total }) {
  const shipping = total > 0 ? 60 : 0;
  const grandTotal = total + shipping;

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "24px",
        height: "fit-content",
      }}
    >
      <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "18px" }}>
        Order Summary
      </h3>

      <div style={rowStyle}>
        <span style={labelStyle}>Subtotal</span>
        <span>
          <AnimatedNumber value={total} formatter={formatPrice} />
        </span>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>Shipping</span>
        <span>{formatPrice(shipping)}</span>
      </div>

      <div
        style={{
          ...rowStyle,
          borderTop: "1px solid #eee",
          paddingTop: "14px",
          marginTop: "6px",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        <span>Total</span>
        <span>
          <AnimatedNumber value={grandTotal} formatter={formatPrice} />
        </span>
      </div>

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          borderRadius: "6px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => alert("Checkout is not implemented in this demo.")}
      >
        Checkout
      </button>
    </div>
  );
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  marginBottom: "12px",
  color: "#333",
};

const labelStyle = {
  color: "#777",
};