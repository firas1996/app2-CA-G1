import React, { useContext, useEffect, useState } from "react";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import { AuthContext } from "./store/auth-context";
import MyFrag from "./Components/UI/MyFrag";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <MyFrag>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </MyFrag>
  );
}

export default App;
