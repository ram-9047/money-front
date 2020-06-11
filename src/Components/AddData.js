import React, { Component } from "react";
import axios from "axios";

import "../Assets/Stylesheet/AddData.css";
import { Link } from "react-router-dom";

class AddData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      category: "",
      coupon: "",
      ip: "",
      maturity: "",
      rating: "",
      security: "",
      yield: "",
      submit: false,
      categoryData: [
        "capital",
        "corporate",
        "perpetual",
        "psu",
        "state",
        "recommended",
      ],
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    const { history } = this.props;
    event.preventDefault();
    if (this.state.name)
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://moneyfront-bonds.herokuapp.com/api/bonds",
          {
            name: this.state.name,
            category: this.state.category,
            coupon: this.state.coupon,
            ip: this.state.ip,
            maturity: this.state.maturity,
            rating: this.state.rating,
            security: this.state.security,
            yield: this.state.yield,
          }
        )
        .then((res) => history.push("/"))
        .catch((error) => console.log(error));
  };

  handleOnClick = () => {
    this.setState({ submit: true });
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>MoneyFront</h1>
        </header>
        <div>
          <form onSubmit={this.handleOnSubmit} className="form-data">
            <input
              type="text"
              placeholder="Company Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              className="input-box"
            />

            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              className="input-box"
            >
              <option>{this.state.categoryData[0]}</option>
              <option>{this.state.categoryData[1]}</option>
              <option>{this.state.categoryData[2]}</option>
              <option>{this.state.categoryData[3]}</option>
              <option>{this.state.categoryData[4]}</option>
              <option>{this.state.categoryData[5]}</option>
              <option>{this.state.categoryData[6]}</option>
            </select>
            <input
              type="text"
              placeholder="Coupon"
              name="coupon"
              value={this.state.coupon}
              onChange={this.handleChange}
              className="input-box"
            />
            <input
              type="text"
              placeholder="ip"
              name="ip"
              value={this.state.ip}
              onChange={this.handleChange}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Maturity"
              value={this.state.maturity}
              name="maturity"
              onChange={this.handleChange}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Rating"
              value={this.state.rating}
              name="rating"
              onChange={this.handleChange}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Security"
              value={this.state.security}
              name="security"
              onChange={this.handleChange}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Yield"
              value={this.state.yield}
              name="yield"
              onChange={this.handleChange}
              className="input-box"
            />
            <button
              onSubmit={this.handleOnSubmit}
              onClick={this.handleOnClick}
              className="submit-btn"
            >
              {this.state.submit ? "Submiting......" : "Submit"}
            </button>
          </form>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddData;
