/* eslint-disable no-unused-vars */
import GetStarted from './pages/GetStarted';
import styles from './App.module.css';
import Onboard from './pages/Onboard';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <main className={ styles.container }>
      {/* <GetStarted /> */}
      {/* <Onboard /> */}
      {/* <Login /> */}
      <Welcome />
    </main>
  );
}

export default App;
