import React, { useState, useContext } from 'react';
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
import Context from '../context/Context';

const SIX = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useContext(Context);

  const handleChange = ({ target }) => {
    if (target.name === 'password') {
      setPassword(target.value);
      return;
    }

    setEmail(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email);
  };

  const disabled = !email || password.length < SIX;

  return (
    <section className={ styles.container }>
      <Title title="Welcome Back!" />

      <Banner image={ LoginBanner } />

      <Form onSubmit={ handleSubmit }>
        <Input
          placeholder="Enter your Email address"
          type="email"
          name="email"
          email={ email }
          onChange={ handleChange }
          required
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          name="password"
          email={ password }
          onChange={ handleChange }
          required
        />

        <Subtitle subtitle="Forgot Password ?" />

        <Button type="submit" disabled={ disabled }>Sign In</Button>
      </Form>

      <Link to="/onboard">
        <Text text="Dont have an account ? Sign Up" />
      </Link>
    </section>
  );
}

export default Login;
