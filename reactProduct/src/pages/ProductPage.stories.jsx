import ProductPage from './ProductPage.jsx'

export default {
  title: 'Pages/ProductPage',
  component: ProductPage,
  parameters: { layout: 'padded' },
}

export const WithDetails = {
  parameters: {
    preloadedState: { nav: { page: 'product', selectedProductId: 1 } },
  },
}

export const WithoutDetails = {
  parameters: {
    preloadedState: { nav: { page: 'product', selectedProductId: 10 } },
  },
}

export const NotFound = {
  parameters: {
    preloadedState: { nav: { page: 'product', selectedProductId: 999 } },
  },
}
