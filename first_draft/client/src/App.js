import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Components/Context/UserContext";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import ProtectedRoute from "./Components/Authentication/Protected_Route";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";
import Resources from "./Components/Pages/Resources/Resources";
import Contact from "./Components/Pages/Contact/Contact";
import About from "./Components/Pages/About/About";
import Recipes from "./Components/Pages/Recipes/Recipes";
import Auth from "./Components/Authentication/Auth";
import { VideoBg, HeroBg } from "./Video/VideoElements";
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
      <Header user={user} />
      <Sidebar
        token={isAuthenticated}
        isOpen={isOpen}
        logout={logout}
        toggle={toggle}
      />
      <Navbar logout={logout} token={isAuthenticated} toggle={toggle} />
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
        <Route
          exact
          path="/contacts"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Contact />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/services"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Services />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/resources"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Resources />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/about"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<About />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
        <Route
          exact
          path="/recipes"
          element={
            <ProtectedRoute
              auth={isAuthenticated}
              comp={<Recipes />}
              redirectTo={<Navigate to="/" />}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
