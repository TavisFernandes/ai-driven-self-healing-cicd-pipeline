/** Format whole rupee amounts for display (India-style grouping). */
export function formatInr(amount) {
  if (amount == null || Number.isNaN(Number(amount))) return '₹0'
  const n = Math.round(Number(amount))
  return `₹${n.toLocaleString('en-IN')}`
}

export const IMG_FALLBACK =
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80'
