import { React, Component } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}
export default App;
