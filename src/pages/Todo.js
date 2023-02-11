import React from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import styles from './Todo.module.css';
import TodoBanner from '../assets/TodoBanner.svg';

function Todo() {
  return (
    <section className={ styles.container }>
      <Title title="Welcome Jensen" />

      <Banner image={ TodoBanner } />

      <Button>Add new Todo</Button>

      <ul>
        <Input type="text" placeholder="Filter task" />
        <label htmlFor="12">
          <Input type="checkbox" id="12" />
          Follow Oluwafisayomi.dev on Twitter.
        </label>
        <label htmlFor="13">
          <Input type="checkbox" id="13" />
          Learn Figma by 4pm.
        </label>
        <label htmlFor="14">
          <Input type="checkbox" id="14" />
          Coding at 9am.
        </label>
        <label htmlFor="15">
          <Input type="checkbox" id="15" />
          Watch Mr Beasts Videos.
        </label>
      </ul>

    </section>
  );
}

export default Todo;
