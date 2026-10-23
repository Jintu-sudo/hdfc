import ProductPage from './ProductPage.jsx'

export default {
  title: 'Pages/ProductPage',
  component: ProductPage,
  parameters: { layout: 'padded' },
}

// Batman has a description and details
export const WithDetails = {
  parameters: {
    preloadedState: { nav: { page: 'product', selectedProductId: 1 } },
  },
}

// Other products only have a name, price and image
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
