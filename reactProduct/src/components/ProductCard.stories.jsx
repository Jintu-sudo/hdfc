import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = {
  args: { product: products[0] },
}

export const LongName = {
  args: { product: products[6] },
}
