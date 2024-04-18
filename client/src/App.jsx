import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
