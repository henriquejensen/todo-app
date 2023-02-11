import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
import Title from '../components/Title';
import styles from './Login.module.css';
import LoginBanner from '../assets/LoginBanner.svg';

function Login() {
  return (
    <section className={ styles.container }>
      <Title title="Welcome Back!" />

      <Banner image={ LoginBanner } />

      <Form>
        <Input placeholder="Enter your Email address" type="email" required />
        <Input placeholder="Confirm Password" type="password" required />

        <Subtitle subtitle="Forgot Password ?" />

        <Button type="submit">Sign In</Button>
      </Form>

      <Link to="/onboard">
        <Text text="Dont have an account ? Sign Up" />
      </Link>
    </section>
  );
}

export default Login;
