import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import User from "./pages/board/User";

function App() {
  // 상태 선언
  const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("/users");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

      <Route 
        path="/users" 
        element={
          users.length > 0 ? (
            users.map(u => (
              <User
                key={u.id}
                id={u.id}
                image={u.image}
                name={u.name}
                birthday={u.birthday}
                gender={u.gender}
                job={u.job}
              />
            ))
          ) : ( <p>No users found :	&#40;</p> )
        }
      />
    </Routes>
  );
}

export default App;
