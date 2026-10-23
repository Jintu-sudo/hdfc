import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

// Home shows every product. A category page shows only its own products.
function ProductListPage({ category }) {
  let visibleProducts = products
  let title = 'Shop action figures'

  if (category) {
    visibleProducts = products.filter((product) => product.category === category)
    title = categories.find((c) => c.id === category).label
  }

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2,
        }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  )
}

export default ProductListPage
