# Threadhouse

A modern fashion e-commerce storefront built as a frontend demo. No backend, no database — all product data is local.

## Stack

- Next.js 15 (App Router)
- React Context + useReducer for cart state
- Framer Motion / GSAP for animation (optional, add during polish pass)
- Plain CSS with inline styles

## Pages

- `/` — Home with hero banner and featured products
- `/products` — Full catalog with category filter and price/rating sort
- `/products/[id]` — Product detail with image gallery, size/color picker, add to cart
- `/cart` — Cart with quantity controls and order summary

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- All product data lives in `data/products.js` — no external API calls.
- Cart state is held in memory via React Context; it resets on page refresh (no localStorage, since this is a demo).
- Checkout button is a placeholder — this app doesn't process real orders.