import { createSlice } from "@reduxjs/toolkit";

const VALID_USERNAME = "user";
const VALID_PASSWORD = "hello";

// plain helper (not part of Redux state): used by the Login page
export function isValidLogin(username, password) {
  return username === VALID_USERNAME && password === VALID_PASSWORD;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;