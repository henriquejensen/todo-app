import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
import Title from '../components/Title';
import styles from './Onboard.module.css';

function Onboard() {
  return (
    <section className={ styles.container }>
      <Title title="Welcome Onboard!" />
      <Subtitle subtitle="Let’s help you meet up your task" />

      <Form>
        <Input placeholder="Enter your Full Name" required />
        <Input placeholder="Enter your Email address" type="email" required />
        <Input placeholder="Create a Password" type="password" required />
        <Input placeholder="Profile image URL" type="url" required />

        <Button type="submit">Sign Up</Button>
      </Form>

      <Link to="/login">
        <Text text="Already have an account ? Sign In" />
      </Link>

    </section>
  );
}

export default Onboard;
