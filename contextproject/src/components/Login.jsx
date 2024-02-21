import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Login;
