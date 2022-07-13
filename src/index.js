import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProvider from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={`${window.location.origin}`}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
