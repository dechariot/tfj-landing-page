import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//IMPORT COMPONENTS
import NavBar from "./components/NavBar";
import GetStarted from "./components/GetStarted";
import Features from "./components/Features";
import Story from "./components/Story";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GetStarted />
      <Features />
      <hr style={{ margin: "0" }}></hr>
      <Story />
      <hr style={{ margin: "0" }}></hr>
      <About />
      <hr style={{ margin: "0" }}></hr>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
