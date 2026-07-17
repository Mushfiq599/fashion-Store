"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600",
    tag: "NEW SEASON",
    title: "Clothing that fits your everyday life",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600",
    tag: "FESTIVE EDIT",
    title: "Handcrafted sarees for every occasion",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600",
    tag: "EVERYDAY BASICS",
    title: "Tees and shirts built to last",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600",
    tag: "NOW TRENDING",
    title: "Panjabis crafted for comfort and style",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.25"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

    return () => tl.kill();
  }, [current]);

  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "420px",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${slide.image}') center/cover`,
            color: "#fff",
            padding: "0 20px",
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          {index === current && (
            <div>
              <p
                ref={tagRef}
                style={{ letterSpacing: "3px", fontSize: "13px", marginBottom: "16px" }}
              >
                {slide.tag}
              </p>
              <h1
                ref={titleRef}
                style={{
                  fontSize: "clamp(32px, 6vw, 56px)",
                  fontWeight: 700,
                  marginBottom: "20px",
                  maxWidth: "700px",
                }}
              >
                {slide.title}
              </h1>
              <Link
                ref={btnRef}
                href="/products"
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#111",
                  padding: "14px 32px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Shop the Collection
              </Link>
            </div>
          )}
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === current ? "22px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              background: index === current ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "width 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}