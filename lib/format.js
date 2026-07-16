export function formatPrice(amount) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

export function makeCartId(id, size, color) {
  return `${id}-${size}-${color}`;
}