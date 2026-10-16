import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const AUTH_KEY = "action-figurine-auth";

function loadPreloadedState() {
  try {
    return { auth: { isLoggedIn: localStorage.getItem(AUTH_KEY) === "true" } };
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: { auth: authReducer },
  preloadedState: loadPreloadedState(),
});

store.subscribe(() => {
  try {
    localStorage.setItem(AUTH_KEY, String(store.getState().auth.isLoggedIn));
  } catch {}
});