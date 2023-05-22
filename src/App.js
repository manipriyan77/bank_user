import React, { useState } from "react";
import Login from "./Login";
import NavigationBar from "./NavigationBar";
import ViewTransactions from "./SubmittedTransaction";
import NewTransaction from "./NewTransaction";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />

      {loggedInUser && (
        <div>
          {/* <NavigationBar /> */}

          {loggedInUser === "admin" ? <ViewTransactions /> : <NewTransaction />}
        </div>
      )}
    </div>
  );
};

export default App;
