import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Components/Context/UserContext";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import ProtectedRoute from "./Components/Authentication/Protected_Route";
import Home from "./Components/Pages/Home/Home";
import Error from "./Components/Pages/Error/Error";
import UserRecipes from "./Components/Pages/Recipes/UserRecipes";

import { VideoBg, HeroBg, TopBar } from "./Video/VideoElements";
import video from "./Video/FoodVideo1.mp4";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { logout, user } = useContext(UserContext);
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <TopBar>
        <Header user={user} />
        <Navbar logout={logout} token={isAuthenticated} toggle={toggle} /><Sidebar
        token={isAuthenticated}
        isOpen={isOpen}
        logout={logout}
        toggle={toggle}
      />
      </TopBar>
      <Routes>
        <Route
          exact
          path="/user_home"
          element={<ProtectedRoute auth={isAuthenticated} comp={<Home />} />}
        ></Route>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Navigate to="/user_home" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/recipes"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<UserRecipes />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/*"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Error />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
