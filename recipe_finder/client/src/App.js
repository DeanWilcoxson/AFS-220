import { React, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext.js";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/authentication/Protected_Route";
import Home from "./components/pages/Home";
import Auth from "./components/authentication/Auth.js";
export default function App() {
  const { logout } = useContext(UserContext);
  const isAuthenticated = !!localStorage.getItem("token");
  console.log(isAuthenticated);
  return (
    <div>
      <Navbar logout={logout} token={isAuthenticated} />
      <Header />
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
