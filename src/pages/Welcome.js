/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import styles from './Welcome.module.css';
import WelcomeBanner from '../assets/WelcomeBanner.svg';
import { addTodo } from '../services/todosApi';

function Welcome() {
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addTodo(task);
    console.log(res);

    navigate('/todo');
  };

  return (
    <section className={ styles.container }>
      <Title title="Welcome Onboard!" />

      <Banner image={ WelcomeBanner } />

      <Subtitle subtitle="Add What your want to do later on.." />

      <Form onSubmit={ handleSubmit }>
        <Input
          placeholder="Add a task"
          required
          onChange={ (e) => setTask(e.target.value) }
        />

        <Button type="submit">Add to list</Button>
      </Form>

    </section>
  );
}

export default Welcome;
