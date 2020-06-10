import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Assets/Stylesheet/AllBond.css";

class AllData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://moneyfront-bonds.herokuapp.com/api/bonds"
    );
    let jsonData = await response.json();
    console.log(jsonData);
    this.setState({ data: jsonData });
  }

  render() {
    return this.state.data.length ? (
      <div>
        <div className="all-bond">
          <div>
            <h1>MoneyFront</h1>
          </div>
          <div className="all-bond-link">
            <Link to="/">
              <button className="view-all-bond">All Bond</button>
            </Link>
            <Link to="/add">
              <button className="add-bond">Add New Bond</button>
            </Link>
          </div>
        </div>
        <table className="table">
          <tr>
            <th className="column-heading ">Name</th>
            <th className="column-heading ">Category</th>
            <th className="column-heading ">Coupon</th>
            <th className="column-heading">Ip</th>
            <th className="column-heading">Maturity</th>
            <th className="column-heading">Rating</th>
            <th className="column-heading">Security</th>
            <th className="column-heading">Yield</th>
          </tr>
          {this.state.data.map((singleData) => (
            <tr className="table-row">
              <th className="column-items">{singleData.name}</th>
              <th className="column-items">{singleData.category}</th>
              <th className="column-items">{singleData.coupon}</th>
              <th className="column-items">{singleData.ip}</th>
              <th className="column-items">{singleData.maturity}</th>
              <th className="column-items">{singleData.rating}</th>
              <th className="column-items">{singleData.security}</th>
              <th className="column-items">{singleData.yield}</th>
            </tr>
          ))}
        </table>
      </div>
    ) : (
      <div className="loading">
        <div className="loading-text">
          <p>Loading</p>
        </div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
}

export default AllData;
