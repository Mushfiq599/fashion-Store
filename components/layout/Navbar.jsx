"use client";

import Link from "next/link";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#111",
            textDecoration: "none",
          }}
        >
          Threadhouse
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          <Link href="/products" style={navLinkStyle}>
            Shop
          </Link>
          <Link href="/cart" style={{ ...navLinkStyle, position: "relative" }}>
            <FiShoppingBag size={20} />
            {itemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "#111",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {itemCount}
              </span>
            )}
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            padding: "12px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderTop: "1px solid #eee",
          }}
        >
          <Link href="/products" onClick={() => setMenuOpen(false)} style={navLinkStyle}>
            Shop
          </Link>
          <Link href="/cart" onClick={() => setMenuOpen(false)} style={navLinkStyle}>
            Cart ({itemCount})
          </Link>
        </div>
      )}
    </header>
  );
}

const navLinkStyle = {
  color: "#333",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
};