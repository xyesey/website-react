import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Watch from "./components/pages/Watch";
import Anime from "./components/pages/Anime";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/watch" exact element={<Watch />} />
          <Route path="/anime" exact element={<Anime />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
