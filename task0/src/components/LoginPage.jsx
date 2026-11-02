import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
    const { setIsLoggedIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function credentialsCheck() {
        if (username === "user" && password === "hello") {
            setIsLoggedIn(true);
        } else {
            setErrorMessage("Wrong Credentials");
        }
    }

    return (
        <>
            <input
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button
                onClick={credentialsCheck}>
                Log In
            </button>

            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}

export default LoginPage;