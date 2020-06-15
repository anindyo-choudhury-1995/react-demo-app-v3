import React, { Component } from "react";
import "./createtag.css";
class Createtag extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="CreatetagContainer">
        Create Tag
      </div>
    );
  }
}

export default Createtag;
