import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../store/actions/auth';
import router from 'next/router';
import { LoginFormSchema } from '../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);

  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (userData: any) => {
    dispatch(login(userData));
    reset();
  };

  useEffect(() => {
    if (userData) {
      router.push('/');
    }
  }, [userData]);

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
              error={!!formState.errors['email']?.message}
              helperText={formState.errors['email']?.message}
            />
            <TextField
              type="password"
              label="Пароль"
              variant="outlined"
              size="small"
              {...register('password')}
              error={!!formState.errors['password']?.message}
              helperText={formState.errors['password']?.message}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={!formState.isValid || formState.isSubmitting}>
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Login;
