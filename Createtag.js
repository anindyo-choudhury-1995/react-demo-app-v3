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
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Type</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Code</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Meaning</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst">Active</div>
              <div className="ItemSecondCheckBox">
                <input type="checkbox" defaultChecked/>
              </div>
            </div>
          </div>
          <div className="SecondDiv">
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Region</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Owner</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Tags</div>
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
