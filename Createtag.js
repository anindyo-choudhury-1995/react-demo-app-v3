import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./createtag.css";
class Createtag extends Component {
  state = {};
  render() {
    return (
      <div className="CreatetagContainer">
        <div className="TopActionBar">
          <div className="Create">Create</div>
          <div>
            | &nbsp;
            <button>Save and Continue</button>
            <Link to="/tags">
              <button>Save and Close</button>
            </Link>
            <Link to="/tags">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
        <br/>
        <div className="TwoDivs">
          <div className="FirstDiv">
            <div className="Items">
              <div className="ItemsFirst">* LookUp Type</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">* LookUp Code</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">* LookUp Meaning</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">Active</div>
              <div className="ItemSecondCheckBox">
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="SecondDiv">
            <div className="Items">
              <div className="ItemsFirst">* Region</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">* Owner</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">* Tags</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Createtag;
