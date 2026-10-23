import { createContext } from 'react'

// The "box" that holds: isLoggedIn, login(), logout()
// AuthProvider.jsx fills it, and components read it with useContext(AuthContext)
export const AuthContext = createContext(null)
