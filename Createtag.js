import React, { Component } from "react";
import "./createtag.css";
class Createtag extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="CreatetagContainer">
        <div className="TopActionBar">
          <div>Create</div>
          <div>
            |
            <button>
              Save and Continue
            </button>
            <button>
              Save and Close
            </button>
            <button>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Createtag;
