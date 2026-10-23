import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload
      const existingItem = state.items.find((item) => item.productId === productId)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ productId, quantity })
      }
    },
    setQuantity(state, action) {
      const { productId, quantity } = action.payload
      const item = state.items.find((item) => item.productId === productId)
      if (item) {
        item.quantity = Math.max(1, quantity)
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.productId !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, setQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

export function selectCartCount(state) {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0)
}
