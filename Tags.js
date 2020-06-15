import React, { Component } from "react";
import "./tags.css";
class Tags extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="TagsContainer">
        Tags
      </div>
    );
  }
}

export default Tags;
