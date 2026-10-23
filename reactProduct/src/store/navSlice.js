import { createSlice } from '@reduxjs/toolkit'

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
