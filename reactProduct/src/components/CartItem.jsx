import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { formatPrice } from '../utils/formatPrice.js'

function CartItem({ product, quantity, onQuantityChange, onRemove }) {
  return (
    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}>
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{ width: 80, height: 80, objectFit: 'contain' }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" component="h3">
          {product.name}
        </Typography>
        <Typography color="text.secondary">{formatPrice(product.price)}</Typography>
      </Box>
      <TextField
        label="Qty"
        type="number"
        size="small"
        value={quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
        slotProps={{ htmlInput: { min: 1 } }}
        sx={{ width: 80 }}
      />
      <Button color="error" onClick={onRemove}>
        Remove
      </Button>
    </Paper>
  )
}

export default CartItem
