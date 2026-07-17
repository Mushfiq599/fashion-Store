"use client";

import { motion } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        display: "flex",
        gap: "16px",
        padding: "20px 0",
        borderBottom: "1px solid #eee",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "90px",
          height: "110px",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#f5f5f5",
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 600 }}>{item.name}</h4>
            <p style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>
              {item.color} / {item.size}
            </p>
          </div>
          <button
            onClick={() => removeItem(item.cartId)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#999",
              padding: "4px",
            }}
            aria-label="Remove item"
          >
            <FiTrash2 size={17} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              padding: "4px 10px",
            }}
          >
            <button
              onClick={() => updateQty(item.cartId, item.qty - 1)}
              style={qtyBtnStyle}
              aria-label="Decrease quantity"
            >
              <FiMinus size={13} />
            </button>
            <span style={{ fontSize: "14px", minWidth: "16px", textAlign: "center" }}>
              {item.qty}
            </span>
            <button
              onClick={() => updateQty(item.cartId, item.qty + 1)}
              style={qtyBtnStyle}
              aria-label="Increase quantity"
            >
              <FiPlus size={13} />
            </button>
          </div>

          <p style={{ fontSize: "15px", fontWeight: 600 }}>
            {formatPrice(item.price * item.qty)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const qtyBtnStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "#333",
};