import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyProvider from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
