import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormTextField from '../components/FormTextField.jsx'
import { login } from '../store/authSlice.js'

function LoginPage() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit() {
    dispatch(login())
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
          Welcome back
        </Typography>
        <Typography color="text.secondary">Log in to continue shopping</Typography>

        <FormTextField
          name="username"
          label="Email or username"
          register={register}
          rules={{ required: 'Enter your email or username' }}
          errors={errors}
        />
        <FormTextField
          name="password"
          label="Password"
          type="password"
          register={register}
          rules={{ required: 'Enter your password' }}
          errors={errors}
        />

        <Button type="submit" variant="contained" size="large">
          Log in
        </Button>
      </Box>
    </Container>
  )
}

export default LoginPage
