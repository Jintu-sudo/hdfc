# reactProduct

The Action-Figurine shop, converted from plain HTML/CSS/JS into a Vite + React (plain JavaScript) project.

## Run it

```bash
npm install
npm run dev          # app        -> http://localhost:5173
npm run storybook    # components -> http://localhost:6006
npm run lint         # ESLint
```

Log in with any username and password (like the original site, there is no real account check).

## Tools

React, Vite, ESLint, MUI (+ MUI icons), react-hook-form, Redux Toolkit + react-redux, Storybook.
Hooks used: `useState`, `useSelector`, `useDispatch`, `useForm`.

## Structure

```
src/
  main.jsx            entry point (CssBaseline + Redux Provider)
  App.jsx             login screen, or navbar + current page + footer
  data/               products.js (all 12 products + categories), orders.js
  store/              Redux slices
    authSlice.js        isLoggedIn, login, logout
    navSlice.js         which page is showing, goTo, openProduct
    cartSlice.js        items [{ productId, quantity }], add / setQuantity / remove / clear
    profileSlice.js     name, email, phone, address, updateProfile
    store.js            puts the slices together
  components/         Navbar, Footer, ProductCard, CartItem, FormTextField
  pages/              LoginPage, ProductListPage, ProductPage, CartPage, ProfilePage
  utils/formatPrice.js
```

## How Redux flows here

1. A component reads data with `useSelector` (for example the cart count in `Navbar`).
2. A click calls `dispatch(addToCart({ productId, quantity }))`.
3. The matching reducer in the slice updates the state.
4. Every component that reads that state re-renders by itself.

Pages switch through the `nav` slice instead of a router, so there are no real URLs yet.
