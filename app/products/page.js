"use client";

import { useState, useEffect, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";
import SortBar from "@/components/products/SortBar";
import Pagination from "@/components/products/Pagination";

const PAGE_SIZE = 8;

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: 600, marginBottom: "24px" }}>
        All Products
      </h1>

      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={handleCategoryChange}
      />

      <SortBar
        sortBy={sortBy}
        onChange={handleSortChange}
        resultCount={filteredProducts.length}
      />

      <ProductGrid products={paginatedProducts} loading={loading} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}