import React from "react";
import "./App.css";
import Home from "./screens/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import SignUp from "./screens/signup/SignUp";
import UserDetails from "./screens/signup/UserDetails";
import VerifyEmail from "./screens/signup/VerifyEmail";
import Profile from "./screens/profile/Profile";
import AboutUs from "./screens/aboutUs/AboutUs";
import Help from "./screens/help/Help";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} exact />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verifyaccount" element={<VerifyEmail />} />
      <Route path="/signup/user-details" element={<UserDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/Help" element={<Help />} />
    </Routes>
  );
}

export default App;
