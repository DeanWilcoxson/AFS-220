import { React, useContext } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext.js";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/authentication/Protected_Route";
import Home from "./components/pages/Home";
import Auth from "./components/authentication/Auth.js";
export default function App() {
  const { logout, user } = useContext(UserContext);
  const isAuthenticated = !!localStorage.getItem("token");
  console.log(user);
  return (
    <div className="App">
      <Header user={user}/>
      <Navbar logout={logout} token={isAuthenticated} />
      <Routes>
        <Route
          exact
          path="/user_home"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Home />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Navigate to="/user_home" />}
              redirectTo={<Auth />}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}
