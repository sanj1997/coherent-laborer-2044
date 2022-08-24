import logo from './logo.svg';
import './App.css';
import HomePage from './Routes/HomePage';
import styles from "./Styles/main.module.css"
function App() {
  return (
    <div className={styles.main}>
      <HomePage/>
    </div>
  );
}

export default App;
