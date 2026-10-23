import ProductListPage from './ProductListPage.jsx'

export default {
  title: 'Pages/ProductListPage',
  component: ProductListPage,
  parameters: { layout: 'padded' },
}

export const AllProducts = {}

export const Marvel = {
  args: { category: 'marvel' },
}

export const Anime = {
  args: { category: 'anime' },
}
