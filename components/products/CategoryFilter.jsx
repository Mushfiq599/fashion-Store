"use client";

export default function CategoryFilter({ categories, active, onChange }) {
  const options = ["All", ...categories];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "24px",
      }}
    >
      {options.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: isActive ? "1px solid var(--accent)" : "1px solid #ddd",
              background: isActive ? "var(--accent)" : "#fff",
              color: isActive ? "#fff" : "#333",
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}