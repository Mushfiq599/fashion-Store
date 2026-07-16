"use client";

import { createContext, useContext, useReducer } from "react";
import { makeCartId } from "@/lib/format";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const cartId = makeCartId(action.item.id, action.size, action.color);
      const existing = state.find((line) => line.cartId === cartId);

      if (existing) {
        return state.map((line) =>
          line.cartId === cartId ? { ...line, qty: line.qty + 1 } : line
        );
      }

      return [
        ...state,
        {
          cartId,
          id: action.item.id,
          name: action.item.name,
          price: action.item.price,
          image: action.item.images[0],
          size: action.size,
          color: action.color,
          qty: 1,
        },
      ];
    }

    case "REMOVE_ITEM":
      return state.filter((line) => line.cartId !== action.cartId);

    case "UPDATE_QTY":
      return state.map((line) =>
        line.cartId === action.cartId
          ? { ...line, qty: Math.max(1, action.qty) }
          : line
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const total = cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  const itemCount = cart.reduce((sum, line) => sum + line.qty, 0);

  const addItem = (item, size, color) =>
    dispatch({ type: "ADD_ITEM", item, size, color });

  const removeItem = (cartId) => dispatch({ type: "REMOVE_ITEM", cartId });

  const updateQty = (cartId, qty) =>
    dispatch({ type: "UPDATE_QTY", cartId, qty });

  const clearCart = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{ cart, total, itemCount, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}