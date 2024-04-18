import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bgImage from "./assets/bg-home.jpg";

function App() {
  return (
    <div
      className="bg-cover bg-center mini:px-5 px-14 py-5 mini:h-full sm:h-full h-screen "
      style={{ backgroundImage: `url(${bgImage})` }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
