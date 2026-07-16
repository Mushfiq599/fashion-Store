import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Threadhouse — Modern Fashion Store",
  description: "A modern fashion storefront demo built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: "70vh" }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}