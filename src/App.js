import { Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import styles from './App.module.css';
import Onboard from './pages/Onboard';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Todo from './pages/Todo';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main className={ styles.container }>
        <Routes>
          <Route path="/" element={ <GetStarted /> } />
          <Route path="/onboard" element={ <Onboard /> } />
          <Route path="/welcome" element={ <Welcome /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/todo" element={ <Todo /> } />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
