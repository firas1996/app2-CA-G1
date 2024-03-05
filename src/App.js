import React, { useEffect, useState } from "react";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == 1) {
      setIsLoggedIn(true);
    }
    // console.log("aaa");
  }, []);
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", 1);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
