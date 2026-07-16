"use client";

import { useState } from "react";

export default function ImageGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          background: "#f5f5f5",
          aspectRatio: "3 / 4",
          marginBottom: "12px",
        }}
      >
        <img
          src={activeImage}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {images.length > 1 && (
        <div style={{ display: "flex", gap: "10px" }}>
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              style={{
                border:
                  img === activeImage ? "2px solid #111" : "2px solid transparent",
                borderRadius: "6px",
                overflow: "hidden",
                padding: 0,
                cursor: "pointer",
                width: "70px",
                height: "90px",
                background: "#f5f5f5",
              }}
            >
              <img
                src={img}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}