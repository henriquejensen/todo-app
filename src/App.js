/* eslint-disable no-unused-vars */
import GetStarted from './pages/GetStarted';
import styles from './App.module.css';
import Onboard from './pages/Onboard';
import Login from './pages/Login';

function App() {
  return (
    <main className={ styles.container }>
      {/* <GetStarted /> */}
      {/* <Onboard /> */}
      <Login />
    </main>
  );
}

export default App;
