import CartPage from './CartPage.jsx'

export default {
  title: 'Pages/CartPage',
  component: CartPage,
  parameters: { layout: 'padded' },
}

export const Empty = {}

export const WithItems = {
  parameters: {
    preloadedState: {
      cart: {
        items: [
          { productId: 1, quantity: 1 },
          { productId: 2, quantity: 1 },
          { productId: 10, quantity: 2 },
        ],
      },
    },
  },
}
