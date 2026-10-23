// 34.9 -> "$34.90"
export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`
}
