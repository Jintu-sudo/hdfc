import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

function LoginPage() {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    function credentialsCheck(data) {
        setErrorMessage('');
        if (data.username === "user" && data.password === "hello") {
            dispatch(login());
        } else {
            setErrorMessage("Wrong Credentials");
        }
    }

    return (
        <Box sx={{ maxWidth: 360, mx: 'auto', mt: 10 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
            <form onSubmit={handleSubmit(credentialsCheck)}>
                <Stack spacing={2}>
                    <TextField
                        label="Username"
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button type="submit" variant="contained">Log In</Button>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                </Stack>
            </form>
        </Box>
    );
}


export default LoginPage;