import React from "react";
import logo from "./../../Assets/logo.png";
import "./App.css";
import Header from "./../../Component/Header";
import Card from "./../../Component/Card";
import CardBase from "./../../Component/CardBase";
import Icon from "./../../Component/Icon";

function App() {
  return (
    <div>
      <div className="container" style={{ width: "50%" }}>
        <div className="row" style={{ backgroundColor: "white" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
          <Card />
          <CardBase />
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default App;
