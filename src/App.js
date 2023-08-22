import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-2xl mb-8 overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
