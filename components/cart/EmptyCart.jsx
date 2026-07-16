import Link from "next/link";

export default function EmptyCart() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
        Your cart is empty
      </h3>
      <p style={{ fontSize: "14px", color: "#777", marginBottom: "24px" }}>
        Looks like you haven't added anything yet.
      </p>
      <Link
        href="/products"
        style={{
          display: "inline-block",
          background: "#111",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Continue Shopping
      </Link>
    </div>
  );
}