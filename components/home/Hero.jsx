import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600') center/cover",
        color: "#fff",
        padding: "0 20px",
      }}
    >
      <div>
        <p style={{ letterSpacing: "3px", fontSize: "13px", marginBottom: "16px" }}>
          NEW SEASON
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 700,
            marginBottom: "20px",
            maxWidth: "700px",
          }}
        >
          Clothing that fits your everyday life
        </h1>
        <Link
          href="/products"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#111",
            padding: "14px 32px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}