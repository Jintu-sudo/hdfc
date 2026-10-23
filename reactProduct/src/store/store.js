import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import cartReducer from './cartSlice.js'
import navReducer from './navSlice.js'
import profileReducer from './profileSlice.js'

// A function, so Storybook can make a fresh store with starting data per story
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
