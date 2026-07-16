"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "28px" }}>
        Your Cart
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "32px",
          alignItems: "start",
        }}
        className="cart-grid"
      >
        <div>
          {cart.map((item) => (
            <CartItem key={item.cartId} item={item} />
          ))}
        </div>

        <CartSummary total={total} />
      </div>
    </div>
  );
}