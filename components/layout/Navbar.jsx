"use client";

import Link from "next/link";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);
  const prevCount = useRef(itemCount);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (itemCount > prevCount.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 350);
      prevCount.current = itemCount;
      return () => clearTimeout(timer);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #eee",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: scrolled ? "10px 20px" : "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.25s ease",
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
            <motion.div
              animate={bump ? { scale: [1, 1.3, 1] } : { scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <FiShoppingBag size={20} />
            </motion.div>
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