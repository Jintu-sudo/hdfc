import { fn } from 'storybook/test'
import CartItem from './CartItem.jsx'
import { products } from '../data/products.js'

export default {
  title: 'Components/CartItem',
  component: CartItem,
  args: {
    product: products[0],
    quantity: 1,
    onQuantityChange: fn(),
    onRemove: fn(),
  },
}

export const Default = {}

export const ManyUnits = {
  args: { quantity: 5 },
}
