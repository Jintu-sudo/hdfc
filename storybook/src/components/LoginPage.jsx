import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function LoginPage({
  setIsLoggedIn,
  buttonColor = "primary",
  buttonSize = "medium",
  buttonVariant = "contained",
  fieldSize = "medium",
  fieldVariant = "outlined",
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function credentialsCheck() {
    if (username === "user" && password === "hello") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Wrong Credentials");
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Login</Typography>

      <TextField
        label="Username"
        size={fieldSize}
        variant={fieldVariant}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        size={fieldSize}
        variant={fieldVariant}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        color={buttonColor}
        size={buttonSize}
        variant={buttonVariant}
        onClick={credentialsCheck}
      >
        Log In
      </Button>

      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Stack>
  );
}