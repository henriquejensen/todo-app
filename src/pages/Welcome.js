import React from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import styles from './Welcome.module.css';
import WelcomeBanner from '../assets/WelcomeBanner.svg';

function Welcome() {
  return (
    <section className={ styles.container }>
      <Title title="Welcome Onboard!" />

      <Banner image={ WelcomeBanner } />

      <Subtitle subtitle="Add What your want to do later on.." />

      <Form>
        <Input placeholder="Add a task" required />

        <Button type="submit">Add to list</Button>
      </Form>

    </section>
  );
}

export default Welcome;
