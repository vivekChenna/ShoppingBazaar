import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" border border-black text-2xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
