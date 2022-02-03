import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import Recipes from "./components/pages/Recipes";
import Contact from "./components/pages/Contact";
import Resources from "./components/pages/Resources";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Error from "./components/pages/Error";

class App extends Component {
  render() {
    // <Route exact path="/" element={<Home />}></Route>
    return (
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/recipes" element={<Recipes />}></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
