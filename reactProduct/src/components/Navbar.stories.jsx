import Navbar from './Navbar.jsx'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
}

export const EmptyCart = {}

export const WithItemsInCart = {
  parameters: {
    preloadedState: {
      cart: { items: [{ productId: 1, quantity: 2 }, { productId: 10, quantity: 1 }] },
    },
  },
}

export const OnMarvelPage = {
  parameters: {
    preloadedState: { nav: { page: 'marvel', selectedProductId: null } },
  },
}
