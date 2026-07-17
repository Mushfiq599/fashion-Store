"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#f5f5f5",
          aspectRatio: "3 / 4",
          marginBottom: "12px",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>
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