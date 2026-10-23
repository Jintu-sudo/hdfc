import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { AuthContext } from '../context/AuthContext.js'

function LoginPage() {
  const { login } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')

  // react-hook-form keeps track of the inputs and their errors for us
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // register() gives back a ref + other props. MUI's TextField wants the ref
  // on the real <input>, so we pass it through "inputRef".
  const { ref: usernameRef, ...usernameProps } = register('username', {
    required: 'Username is required',
  })
  const { ref: passwordRef, ...passwordProps } = register('password', {
    required: 'Password is required',
  })

  // Only runs when every field passes validation
  function onSubmit(data) {
    const isValid = login(data.username, data.password)
    if (!isValid) {
      setErrorMessage('Wrong credentials')
    }
  }

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 10, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h4" component="h1">
          Log in
        </Typography>

        <TextField
          label="Username"
          {...usernameProps}
          inputRef={usernameRef}
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          {...passwordProps}
          inputRef={passwordRef}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />

        <Button type="submit" variant="contained">
          Log in
        </Button>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Box>
    </Container>
  )
}

export default LoginPage
