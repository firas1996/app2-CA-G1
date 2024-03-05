import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  onLogin: (email, password) => {},
  onLogout: () => {},
});
