import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
