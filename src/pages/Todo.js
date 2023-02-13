import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import styles from './Todo.module.css';
import TodoBanner from '../assets/TodoBanner.svg';
import Context from '../context/Context';
import { todosApi } from '../services/todosApi';

function Todo() {
  const { user, todos, setTodos } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTodos() {
      const result = await todosApi();
      setTodos(result);
    }
    getTodos();
  }, [setTodos]);

  return (
    <section className={ styles.container }>
      <Title title={ `Welcome ${user}` } />

      <Banner image={ TodoBanner } />

      <Button onClick={ () => navigate('/welcome') }>Add new Todo</Button>

      <ul>
        <Input type="text" placeholder="Filter task" />
        {todos.map((todo) => (
          <label htmlFor={ todo.id } key={ todo.id }>
            <Input type="checkbox" id={ todo.id } />
            {todo.value}
          </label>
        ))}

      </ul>

    </section>
  );
}

export default Todo;
