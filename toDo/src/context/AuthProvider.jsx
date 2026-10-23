import { useState } from 'react'
import { AuthContext } from './AuthContext.js'

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Returns true if the credentials are right, false otherwise
  function login(username, password) {
    if (username === 'user' && password === 'hello') {
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
