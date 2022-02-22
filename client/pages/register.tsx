import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { registration } from '../store/actions/auth';
import router from 'next/router';

const Register = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (userData: any) => {
    dispatch(registration(userData));
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
              type="text"
              label="Имя"
              variant="outlined"
              size="small"
              {...register('name')}
            />
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
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Register;
