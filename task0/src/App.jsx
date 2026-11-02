import './App.css'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import { useAuth } from './context/AuthContext'

function App() {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Dashboard /> : <LoginPage />;
}

export default App
