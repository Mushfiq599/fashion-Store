export default function EmptyState({ title, message }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        color: "#666",
      }}
    >
      <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
        {title}
      </h3>
      <p style={{ fontSize: "14px" }}>{message}</p>
    </div>
  );
}