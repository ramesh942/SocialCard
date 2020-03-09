import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        
        <i
          style={{ float: "right", margin: "10px" }}
          className="fas fa-envelope"
        >
          {" "}
        </i>
       
        <i
          style={{ float: "right", margin: "10px", color: "red" }}
          className="fas fa-heart"
        >
          {" "}
          199
        </i>
      
        <i
          style={{ float: "right", margin: "10px", color: "green" }}
          className="fas fa-retweet"
        >
          {" "}
          45
        </i>
        <i
          style={{ float: "right", margin: "10px" }}
          className="fas fa-comment"
        >
          {" "}
          2
        </i>
      </div>
    );
  }
}
