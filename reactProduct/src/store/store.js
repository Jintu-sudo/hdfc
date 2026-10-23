import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import cartReducer from './cartSlice.js'
import navReducer from './navSlice.js'
import profileReducer from './profileSlice.js'

export function createAppStore(preloadedState) {
  return configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
      nav: navReducer,
      profile: profileReducer,
    },
    preloadedState,
  })
}

export const store = createAppStore()
