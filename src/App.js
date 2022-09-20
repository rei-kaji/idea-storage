import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddIdea from "./components/AddIdea";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addidea" element={<AddIdea isAuth={isAuth} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
