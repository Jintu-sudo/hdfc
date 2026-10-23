import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { products } from '../data/products.js'
import { addToCart } from '../store/cartSlice.js'
import { goTo } from '../store/navSlice.js'
import { formatPrice } from '../utils/formatPrice.js'

function ProductPage() {
  const dispatch = useDispatch()
  const selectedProductId = useSelector((state) => state.nav.selectedProductId)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === selectedProductId)

  if (!product) {
    return (
      <>
        <Typography sx={{ mb: 2 }}>We could not find that product.</Typography>
        <Button variant="contained" onClick={() => dispatch(goTo('home'))}>
          Back to shop
        </Button>
      </>
    )
  }

  function handleAddToCart() {
    dispatch(addToCart({ productId: product.id, quantity }))
  }

  function handleBuy() {
    handleAddToCart()
    dispatch(goTo('cart'))
  }

  return (
    <>
      <Button onClick={() => dispatch(goTo('home'))} sx={{ mb: 2 }}>
        Back to shop
      </Button>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Paper
          variant="outlined"
          sx={{ flex: 1, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{ width: '100%', maxWidth: 350, objectFit: 'contain' }}
          />
        </Paper>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4" component="h1">
            {product.name}
          </Typography>
          <Typography variant="h5">{formatPrice(product.price)}</Typography>

          {product.description && <Typography>{product.description}</Typography>}

          {product.details && (
            <Box>
              {product.details.map((detail) => (
                <Box key={detail.label}>
                  <Typography sx={{ py: 1 }}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </Typography>
                  <Divider />
                </Box>
              ))}
            </Box>
          )}

          <TextField
            label="Quantity"
            type="number"
            size="small"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            slotProps={{ htmlInput: { min: 1 } }}
            sx={{ width: 120 }}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button variant="contained" color="error" onClick={handleBuy}>
              Buy
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProductPage
