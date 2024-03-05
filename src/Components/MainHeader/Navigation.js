import React from "react";

import classes from "./Navigation.module.css";
import { AuthContext } from "../../store/auth-context";

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {(authStore) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {authStore.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {authStore.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {authStore.isLoggedIn && (
                <li>
                  <button onClick={authStore.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
