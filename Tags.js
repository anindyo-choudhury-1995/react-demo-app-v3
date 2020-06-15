import React, { Component } from "react";
import { Link } from 'react-router-dom'

import "./tags.css";
class Tags extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="TagsContainer">
        Service Administration: Manage LookUps
        <Link to="/create-tag">
            <button>Create</button>
          </Link>
      </div>
    );
  }
}

export default Tags;
