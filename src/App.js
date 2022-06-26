import React from "react";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Intro from "./components/intro/intro";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
};

export default App;
