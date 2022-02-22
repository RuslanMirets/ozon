import { Container } from '@mui/material';
import type { NextPage } from 'next';
import UserList from '../components/UserList';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <UserList />
      </Container>
    </MainLayout>
  );
};

export default Home;
