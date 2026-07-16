"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ImageGallery from "@/components/product/ImageGallery";
import SizeColorPicker from "@/components/product/SizeColorPicker";
import AddToCartButton from "@/components/product/AddToCartButton";
import EmptyState from "@/components/ui/EmptyState";
import { formatPrice } from "@/lib/format";
import { FiStar } from "react-icons/fi";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <EmptyState
          title="Product not found"
          message="This item may have been removed or the link is incorrect."
        />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}
        className="product-details-grid"
      >
        <ImageGallery images={product.images} name={product.name} />

        <div>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "6px" }}>
            {product.category}
          </p>
          <h1 style={{ fontSize: "26px", fontWeight: 600, marginBottom: "10px" }}>
            {product.name}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "16px",
            }}
          >
            <FiStar size={15} color="#f5a623" fill="#f5a623" />
            <span style={{ fontSize: "13px", color: "#666" }}>
              {product.rating} rating
            </span>
          </div>

          <p style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
            {formatPrice(product.price)}
          </p>

          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, marginBottom: "24px" }}>
            {product.description}
          </p>

          <SizeColorPicker
            sizes={product.sizes}
            colors={product.colors}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />

          <AddToCartButton
            product={product}
            size={selectedSize}
            color={selectedColor}
          />
        </div>
      </div>
    </div>
  );
}