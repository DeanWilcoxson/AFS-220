import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext.js";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/authentication/Protected_Route";
import Home from "./components/pages/Home";
import Auth from "./components/authentication/Auth.js";
export default function App() {
  const { token, logout } = useContext(UserContext);
  console.log(token);
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div>
      <Navbar logout={logout} token={token} />
      <Header />
      <Routes>
        {isAuthenticated ? (
          <Route
            exact
            path="/user_home"
            element={<ProtectedRoute auth={token} comp={<Home />} />}
          ></Route>
        ) : (
          <Route
            exact
            path="/"
            element={<ProtectedRoute auth={token} comp={<Auth />} />}
          ></Route>
        )}
      </Routes>
      <Footer />
    </div>
  );
}
