import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

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
        <form onSubmit={handleSubmit(credentialsCheck)}>
            <input
                placeholder="username"
                {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p>{errors.username.message}</p>}
            <br />

            <input
                type="password"
                placeholder="password"
                {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <br />

            <button type="submit">Log In</button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
}


export default LoginPage;