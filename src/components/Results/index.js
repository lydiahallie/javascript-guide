import React, { Component } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import METHODS from '../../assets/data/methods.js';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: false,
      string: false,
      other: false,
      join: false,
      find: false,
      check: false,
      change: false
    };
  }

  filterItems = (event) => {
    // event.target.value will be either 'array', 'string', 'other', 'join', 'find', 'check' or 'change'
    // Toggle this.state.array, string, etc. will be set to either true or false.
    const toggledValue = !this.state[event.target.value];
    this.setState({ [event.target.value]: toggledValue });
  }

  render() {
    const { array, string, other, join, find, check, change } = this.state;
    let methods = METHODS;
    let arrayMethods = filter(methods, ["dataType", "array"]);
    let stringMethods = filter(methods, ["dataType", "string"]);

    // Filter products if filters have been selected by user.
    const hasSelectedFilter = array || string || other || check || find || join || change;
    if (hasSelectedFilter) {
      if (array) {
        methods = filter(methods, ["dataType", "array"])
      }
      if (string) {
        methods = filter(methods, ["dataType", "string"])
      }
      if (other) {
        methods = filter(methods, ["dataType", "other"])
      }
      if (join) {
        methods = filter(methods, ["goal", "join"])
      }
      if (check) {
        methods = filter(methods, ["goal", "check"])
      }
      if (find) {
        methods = filter(methods, ["goal", "find"])
      }
      if (change) {
        methods = filter(methods, ["goal", "change"])
      }
    }

    return (
      <div className="results-wrapper">
        <div className="wrapper">
          {/* NAVBAR */}
          <div className="navbar">
            <div className="button-row">
              <button
                onClick={this.filterItems}
                value="string"
                disabled={array || other}
              >
              String</button>
              <button
                onClick={this.filterItems}
                value="array"
                disabled={string || other}
              >
              Array</button>
              <button
                onClick={this.filterItems}
                value="other"
                disabled={string || array}
              >
              Other</button>
            </div>
            <div className="button-row">
              <button
                onClick={this.filterItems}
                value="join"
                disabled={check || find || change}
              >
              Join</button>
              <button
                onClick={this.filterItems}
                value="check"
                disabled={join || find || change}
              >
              Check</button>
              <button
                onClick={this.filterItems}
                value="find"
                disabled={join || check || change}
              >
              Find</button>
              <button
                onClick={this.filterItems}
                value="change"
                disabled={join || find || check}
              >
              Change</button>
            </div>
            <div className="methods">
              <h5>ARRAY</h5>
              {map(arrayMethods, (method)=> (
                <Link to={`/methods/${method.id}`}>
                  <p id="method-name-p">{method.name}</p>
                </Link>
              ))}
            </div>
            <div className="methods">
              <h5>STRING</h5>
              {map(stringMethods, (method)=> (
                <Link to={`/methods/${method.id}`}>
                  <p id="method-name-p">{method.name}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* RESULTS */}
          <div className="results">
            {map(methods, (method)=> (
              <div className="result">
                <div className="method-details">
                  <Link to={`/methods/${method.id}`}>
                    <h1>{method.name}</h1>
                  </Link>
                  <h4>{method.description}</h4>
                  <img src={method.image} />
                  <p><a href={method.URL}>Documentation</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
