import React, { Component } from "react";
// import "./mapper.css";
class Mapper extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="MapperContainer">
        Map Activity to Service Request
        <div className="TwoDivs">
          <div className="FirstDiv">
            Region
            <select name="cars" id="cars">
              <option value="">Select Region</option>
              <option value="GLOBAL">GLOBAL</option>
              <option value="ANTARCTICA">ANTARCTICA</option>
              <option value="APAC">APAC</option>
              <option value="EMEA">EMEA</option>
              <option value="JAPAN">JAPAN</option>
              <option value="LAD">LAD</option>
              <option value="NAS">NAS</option>
            </select>
            <br />
            Service Request
            <select name="cars" id="cars">
              <option value="">Select Service Request</option>
              <option value="GLOBAL">GLOBAL</option>
              <option value="ANTARCTICA">ANTARCTICA</option>
              <option value="APAC">APAC</option>
            </select>
          </div>
          <div className="SecondDiv">
            <input type="checkbox" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label>
            <br />
            <input type="checkbox" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label>
            <br />
            <input type="checkbox" name="vehicle3" value="Boat" checked />
            <label for="vehicle3"> I have a boat</label>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Mapper;
