import React from "react";
import Home from "./components/home";
import Header from "./components/shared/header";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
