import React from "react";
import logo from "./../Assets/logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card" style={{ backgroundColor: "orange" }}>
          <div className="logo" style={{ margin: "10px" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <p
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "white",
                fontWeight: "bold",
                display: "block"
              }}
            >
              Learning React ? Start
            </p>
            <p
              style={{
                fontSize: "40px",
                marginLeft: "120px",
                color: "white",
                fontWeight: "bold",
                display: "block"
              }}
            >
              small.
            </p>
          </div>
          <div
            className="box"
            style={{
              marginLeft: "70%",
              marginBottom: "10px",
              marginRight: "10px",
              display: "block"
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <span style={{ fontWeight: "bold", color: "orange" }}>
                Dave Ceddia
              </span>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
