export default function Skeleton({ height = "280px", width = "100%" }) {
  return (
    <div
      style={{
        height,
        width,
        borderRadius: "8px",
        background:
          "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.4s infinite",
      }}
    />
  );
}