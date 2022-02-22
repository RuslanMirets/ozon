import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/actions/auth';

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (userData: any) => {
    dispatch(login(userData));
  };

  return (
    <MainLayout>
      <Container>
        <div className="auth">
          <h1>Авторизация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              {...register('email')}
            />
            <TextField
              type="password"
              label="Пароль"
              variant="outlined"
              size="small"
              {...register('password')}
            />
            <Button type="submit" variant="contained">
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Login;
