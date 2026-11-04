import { useSelector } from 'react-redux'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return isLoggedIn ? <Dashboard /> : <LoginPage />;
}

export default App