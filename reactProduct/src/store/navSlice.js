import { createSlice } from '@reduxjs/toolkit'

// Which page is showing. Page names: 'home', 'anime', 'marvel', 'dc',
// 'starwars', 'cart', 'profile', 'product'
const navSlice = createSlice({
  name: 'nav',
  initialState: { page: 'home', selectedProductId: null },
  reducers: {
    goTo(state, action) {
      state.page = action.payload
    },
    openProduct(state, action) {
      state.page = 'product'
      state.selectedProductId = action.payload
    },
  },
})

export const { goTo, openProduct } = navSlice.actions
export default navSlice.reducer
