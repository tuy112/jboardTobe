import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import PostBoard from "./pages/board/PostBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

      <Route path="/postBoard" element={<PostBoard/>}></Route>
    </Routes>
  );
}

export default App;
