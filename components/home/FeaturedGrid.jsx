"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedGrid() {
  const sectionRef = useRef(null);
  const featured = products.filter((p) => p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "28px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: 600 }}>Featured Picks</h2>

        <Link
          href="/products"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#111",
            border: "1px solid #111",
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Show All
        </Link>
      </div>

      <ProductGrid products={featured} loading={false} />
    </section>
  );
}