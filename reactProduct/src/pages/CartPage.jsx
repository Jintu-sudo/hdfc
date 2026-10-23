import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CartItem from '../components/CartItem.jsx'
import { products } from '../data/products.js'
import { clearCart, removeFromCart, setQuantity } from '../store/cartSlice.js'
import { goTo } from '../store/navSlice.js'
import { formatPrice } from '../utils/formatPrice.js'

const SHIPPING_COST = 5

function CartPage() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const [orderPlaced, setOrderPlaced] = useState(false)

  // Join the cart (ids + quantities) with the product data (name, price...)
  const lines = items.map((item) => ({
    product: products.find((p) => p.id === item.productId),
    quantity: item.quantity,
  }))

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0)
  const shipping = lines.length > 0 ? SHIPPING_COST : 0
  const total = subtotal + shipping

  function handleCheckout() {
    dispatch(clearCart())
    setOrderPlaced(true)
  }

  if (lines.length === 0) {
    return (
      <>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Your cart
        </Typography>
        {orderPlaced ? (
          <Alert severity="success" sx={{ mb: 2 }}>
            Order placed. This is a demo, so no payment was taken.
          </Alert>
        ) : (
          <Typography sx={{ mb: 2 }}>Your cart is empty.</Typography>
        )}
        <Button variant="contained" onClick={() => dispatch(goTo('home'))}>
          Continue shopping
        </Button>
      </>
    )
  }

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        Your cart
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start' }}>
        <Box sx={{ flex: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {lines.map((line) => (
            <CartItem
              key={line.product.id}
              product={line.product}
              quantity={line.quantity}
              onQuantityChange={(quantity) =>
                dispatch(setQuantity({ productId: line.product.id, quantity }))
              }
              onRemove={() => dispatch(removeFromCart(line.product.id))}
            />
          ))}
        </Box>

        <Paper variant="outlined" sx={{ flex: 1, width: '100%', p: 3 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Order summary
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography>Subtotal</Typography>
            <Typography>{formatPrice(subtotal)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography>Shipping</Typography>
            <Typography>{formatPrice(shipping)}</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">{formatPrice(total)}</Typography>
          </Box>
          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleCheckout}>
            Proceed to checkout
          </Button>
          <Button fullWidth sx={{ mt: 1 }} onClick={() => dispatch(goTo('home'))}>
            Continue shopping
          </Button>
        </Paper>
      </Box>
    </>
  )
}

export default CartPage
