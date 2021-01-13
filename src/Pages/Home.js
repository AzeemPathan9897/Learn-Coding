import React, { Component } from "react";
import pic1bg from "../Images/bgsearchbar.jpg";
import { Link } from "react-router-dom";
import '../Components/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="banner col-md-12">
            <img
              className="img-responsive"
              src={pic1bg}
              alt="bgsearchbar"
              width="97%"
              height="495px"
            />
            <h2 className="centered text-secondary">Welcome</h2>
            <p className="belowSbox">
              Lorem ipsunLorem ipsunLorem ipsunLorem ipsunLorem ipsun
            </p>
            <div className="main">
              <input
                className="searchbox "
                type="text"
                name="box"
                placeholder="Search Here U Want"
              />
              <div className="btn">
                <Link to="#">
                  <i className="fa fa-search sFont text-success"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
