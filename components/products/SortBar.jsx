"use client";

export default function SortBar({ sortBy, onChange, resultCount }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "24px",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#777" }}>
        {resultCount} {resultCount === 1 ? "item" : "items"}
      </p>

      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          fontSize: "13px",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        <option value="default">Sort: Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating: Highest First</option>
      </select>
    </div>
  );
}