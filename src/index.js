import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
);
