import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page.jsx";
import MyNavbar from "./components/Navbar.jsx";
import LoginPage from "./pages/Login.page.jsx";
import SignUpPage from "./pages/SignUp.page.jsx";
function App() {
  console.log(document.cookie);
  
  return (

<div>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignUpPage/>} />
  </Routes>
</div>
  );
}

export default App;
