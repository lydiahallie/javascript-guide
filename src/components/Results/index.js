import React, { Component } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import METHODS from '../../assets/data/methods.js';
import {Row, Input} from 'react-materialize';
import './styles.css';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: false,
      string: false,
      join: false,
      find: false,
      check: false,
      change: false
    };
  }

  filterItems = (event) => {
    // event.target.value will be either 'small', 'medium', or 'large'
    // Toggle this.state.small, medium, and large to either true or false.
    const toggledValue = !this.state[event.target.value];
    this.setState({ [event.target.value]: toggledValue });
  }

  render() {
    const { array, string, join, find, check, change } = this.state;
    let methods = METHODS;

    // Filter products if filters have been selected by user.
    const hasSelectedFilter = array || string || check || find || join || change;
    if (hasSelectedFilter) {
      if (array) {
        methods = filter(methods, ["dataType", "array"])
      }
      if (string) {
        methods = filter(methods, ["dataType", "string"])
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
      <div>
        <Row>
          <div className="picker-wrapper">
            <div className="row">
                <div className="picker">
                  <p>Pick Your Datatype</p>
                  <Input
                    onClick={this.filterItems}
                    type="checkbox"
                    id="checkbox"
                    value="string"
                    disabled={array}
                    className='filled-in'
                    defaultChecked='checked'
                  />
                  <label htmlFor="category_dresses">String</label>

                  <input
                    onClick={this.filterItems}
                    type="checkbox"
                    id="checkbox"
                    value="array"
                    disabled={string}
                  />
                  <label htmlFor="category_tops">Array</label>
                </div>
              </div>

              <div className="picker">
                <p>Pick Your Goal</p>
                <input
                  onClick={this.filterItems}
                  type="checkbox"
                  id="checkbox"
                  value="Join"
                  disabled={check || find || change}
                />
                <label htmlFor="goal_join">Join</label>
                <input
                  onClick={this.filterItems}
                  type="checkbox"
                  id="checkbox"
                  value="check"
                  disabled={join || find || change}
                />
                <label htmlFor="goal_check">Check</label>
                <input
                  onClick={this.filterItems}
                  type="checkbox"
                  id="checkbox"
                  value="find"
                  disabled={join || check || change}
                />
                <label htmlFor="goal_check">Find</label>
                <input
                  onClick={this.filterItems}
                  type="checkbox"
                  id="checkbox"
                  value="change"
                  disabled={join || find || check}
                />
                <label htmlFor="goal_check">Change</label>
              </div>
            </div>
          </Row>
          <div className="results">
            {map(methods, (method)=> (
              <div className="result">
                <div className="method-details">
                  <h1 id="method-name">{method.name}</h1>
                  <h4 id="method-description">{method.description}</h4>
                  <img src={method.image} />
                  <p><a href={method.URL}>Documentation</a></p>
                </div>
              </div>
            ))}
        </div>
      </div>
   );
  }
}
