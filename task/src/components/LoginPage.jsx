function LoginPage({ username, setUsername, password, setPassword, setIsLoggedIn, errorMessage, seterrorMessage }) {

    function credentialsCheck() {
        if (username === "user" && password === "hello") {
            setIsLoggedIn(true);
        }
        else {
            seterrorMessage("Wrong Credentials")
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