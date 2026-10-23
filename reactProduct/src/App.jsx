import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProductListPage from './pages/ProductListPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const page = useSelector((state) => state.nav.page)

  if (!isLoggedIn) {
    return <LoginPage />
  }

  let content
  if (page === 'product') {
    content = <ProductPage />
  } else if (page === 'cart') {
    content = <CartPage />
  } else if (page === 'profile') {
    content = <ProfilePage />
  } else if (page === 'home') {
    content = <ProductListPage />
  } else {
    content = <ProductListPage category={page} />
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        {content}
      </Container>
      <Footer />
    </Box>
  )
}

export default App
