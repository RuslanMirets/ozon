import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { registration } from '../store/actions/auth';
import router from 'next/router';
import { RegisterFormSchema } from '../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.auth);

  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (userData: any) => {
    dispatch(registration(userData));
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
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Register;
