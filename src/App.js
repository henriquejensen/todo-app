/* eslint-disable no-unused-vars */
import GetStarted from './pages/GetStarted';
import styles from './App.module.css';
import Onboard from './pages/Onboard';

function App() {
  return (
    <main className={ styles.container }>
      {/* <GetStarted /> */}
      <Onboard />
    </main>
  );
}

export default App;
