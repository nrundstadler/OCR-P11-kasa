import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Apartment from "./pages/Apartment/Apartment";
import About from "./pages/about/About";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <main className="flex-fill container">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
