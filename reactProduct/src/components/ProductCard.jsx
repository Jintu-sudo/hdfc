import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { addToCart } from '../store/cartSlice.js'
import { goTo, openProduct } from '../store/navSlice.js'
import { formatPrice } from '../utils/formatPrice.js'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart({ productId: product.id, quantity: 1 }))
  }

  // "Buy" = add to the cart, then go straight to the cart page
  function handleBuy() {
    handleAddToCart()
    dispatch(goTo('cart'))
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        onClick={() => dispatch(openProduct(product.id))}
        sx={{ flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ height: 220, objectFit: 'contain', p: 1 }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography color="text.secondary">{formatPrice(product.price)}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ gap: 1, px: 2, pb: 2 }}>
        <Button variant="outlined" onClick={handleAddToCart}>
          Add to cart
        </Button>
        <Button variant="contained" color="error" onClick={handleBuy}>
          Buy
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
