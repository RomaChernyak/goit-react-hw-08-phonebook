import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
// import { useNavigate } from 'react-router';
// import { useAuth } from 'hooks';
// import { useEffect } from 'react';

export default function RegisterPage() {
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
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}