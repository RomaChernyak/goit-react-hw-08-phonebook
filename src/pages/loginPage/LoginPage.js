import { Helmet } from 'react-helmet-async';

import { Container } from '@mui/material';

import LoginForm from 'components/LoginForm/LoginForm';
// import { useEffect } from 'react';

// import { useAuth } from 'hooks';
// import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  // const { isLoggedIn } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/contacts');
  //   }
  //   // eslint-disable-next-line
  // }, [isLoggedIn]);

  return (
    <Container component="main">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}