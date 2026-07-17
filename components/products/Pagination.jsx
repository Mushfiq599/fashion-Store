"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        marginTop: "40px",
      }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={navBtnStyle(currentPage === 1)}
        aria-label="Previous page"
      >
        <FiChevronLeft size={16} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "6px",
            border:
              page === currentPage ? "1px solid var(--accent)" : "1px solid #ddd",
            background: page === currentPage ? "var(--accent)" : "#fff",
            color: page === currentPage ? "#fff" : "#333",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={navBtnStyle(currentPage === totalPages)}
        aria-label="Next page"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  );
}

function navBtnStyle(disabled) {
  return {
    width: "36px",
    height: "36px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fff",
    color: disabled ? "#ccc" : "#333",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}