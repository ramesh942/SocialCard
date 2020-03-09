import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="col-md-10">
        <span style={{ fontWeight: "bold" }}>The Practical Dev</span>

        <span>
          @ThePracticalDev.Sep 10
          <i
            style={{ float: "right", margintop: "-100px" }}
            className="fas fa-angle-down"
          ></i>
          <div>
            <span>Learning React ? Start small </span>
          </div>
          <div>
            <span> {"{ author:@decadec}"}</span>
          </div>
        </span>
      </div>
    );
  }
}
