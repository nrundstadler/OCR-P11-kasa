import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <main className="flex-fill container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
