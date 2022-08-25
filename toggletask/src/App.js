// import logo from './logo.svg';
import './App.css';
// import HomePage from './Routes/HomePage';
import styles from "./Styles/main.module.css"
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className={styles.main}>
      <AllRoutes/>
    </div>
  );
}

export default App;
