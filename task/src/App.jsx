import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <LoginPage
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          errorMessage={errorMessage}
          seterrorMessage={seterrorMessage}
        />
      )}

    </>
  );
}

export default App
