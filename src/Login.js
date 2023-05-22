import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserType(user);
    onLogin(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("");
    onLogin(null);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Main Page</h2>
        <button>New Transaction</button>
        <button>View Submitted Transactions</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin("admin")}>Admin</button>
      <button onClick={() => handleLogin("normal")}>Normal User</button>
    </div>
  );
};

export default Login;
