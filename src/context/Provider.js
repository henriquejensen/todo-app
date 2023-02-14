import React, { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const onLogin = useCallback((email) => {
    navigate('/todo');

    setUser(email);
  }, [setUser, navigate]);

  const value = useMemo(() => ({
    user,
    onLogin,
    todos,
    setTodos,
  }), [user, onLogin, todos]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
