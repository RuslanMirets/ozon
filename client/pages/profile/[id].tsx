import { Container } from '@mui/material';
import { NextPage } from 'next';
import router from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { useAppSelector } from '../../store/hooks';

const Profile: NextPage = () => {
  const userData = useAppSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!userData) {
      router.push('/login');
    }
  }, [userData]);

  return (
    <MainLayout title={`Профиль ${userData ? ' | ' + userData?.name : ''}`}>
      <Container>
        <div className="profile">
          <h1>Здравствуйте, {userData?.name}</h1>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Profile;
