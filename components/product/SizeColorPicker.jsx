"use client";

export default function SizeColorPicker({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ marginBottom: "18px" }}>
        <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
          Color: {selectedColor}
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border:
                  color === selectedColor ? "1px solid #111" : "1px solid #ddd",
                background: color === selectedColor ? "#111" : "#fff",
                color: color === selectedColor ? "#fff" : "#333",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
          Size: {selectedSize}
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              style={{
                width: "44px",
                height: "40px",
                borderRadius: "6px",
                border:
                  size === selectedSize ? "1px solid #111" : "1px solid #ddd",
                background: size === selectedSize ? "#111" : "#fff",
                color: size === selectedSize ? "#fff" : "#333",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}