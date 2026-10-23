import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { categories } from '../data/products.js'
import { logout } from '../store/authSlice.js'
import { selectCartCount } from '../store/cartSlice.js'
import { goTo } from '../store/navSlice.js'

function Navbar() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.nav.page)
  const cartCount = useSelector(selectCartCount)

  function handleLogout() {
    dispatch(logout())
    dispatch(goTo('home'))
  }

  function navVariant(pageName) {
    return page === pageName ? 'outlined' : 'text'
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ flexWrap: 'wrap', gap: 1 }}>
        <Button
          color="inherit"
          onClick={() => dispatch(goTo('home'))}
          sx={{ mr: 'auto', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'none' }}
        >
          Action-Figurine
        </Button>

        <Button color="inherit" variant={navVariant('home')} onClick={() => dispatch(goTo('home'))}>
          Home
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            color="inherit"
            variant={navVariant(category.id)}
            onClick={() => dispatch(goTo(category.id))}
          >
            {category.label}
          </Button>
        ))}

        <IconButton color="inherit" aria-label="Profile" onClick={() => dispatch(goTo('profile'))}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Cart" onClick={() => dispatch(goTo('cart'))}>
          <Badge badgeContent={cartCount} color="error" showZero>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Button color="inherit" variant="outlined" onClick={handleLogout}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
