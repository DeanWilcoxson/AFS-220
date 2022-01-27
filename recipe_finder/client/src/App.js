import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Recipes from "./components/pages/Recipes";
import Contact from "./components/pages/Contact";
import Resources from "./components/pages/Resources";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Error from "./components/pages/Error";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/recipes" element={<Recipes />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
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
