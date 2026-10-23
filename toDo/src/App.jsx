import { useContext } from 'react'
import { AuthContext } from './context/AuthContext.js'
import LoginPage from './components/LoginPage.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return isLoggedIn ? <Dashboard /> : <LoginPage />
}

export default App
