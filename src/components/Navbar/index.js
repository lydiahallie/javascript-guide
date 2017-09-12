import React, { Component } from 'react';
import filter from 'lodash/filter';
import METHODS from '../../assets/data/methods.js';
import MethodsList from './components/MethodsList';

class Navbar extends Component {
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
    const arrayMethods = filter(methods, ['dataType', 'array']);
    const stringMethods = filter(methods, ['dataType', 'string']);

    // Filter products if filters have been selected by user.
    const hasSelectedFilter = array || string || other || check || find || join || change;
    if (hasSelectedFilter) {
      if (array) {
        methods = filter(methods, ['dataType', 'array'])
      }
      if (string) {
        methods = filter(methods, ['dataType', 'string'])
      }
      if (other) {
        methods = filter(methods, ['dataType', 'other'])
      }
      if (join) {
        methods = filter(methods, ['goal', 'join'])
      }
      if (check) {
        methods = filter(methods, ['goal', 'check'])
      }
      if (find) {
        methods = filter(methods, ['goal', 'find'])
      }
      if (change) {
        methods = filter(methods, ['goal', 'change'])
      }
    }

    return(
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
        <MethodsList
          label="STRING"
          methods={stringMethods}
        />
        <MethodsList
          label="ARRAY"
          methods={arrayMethods}
        />
      </div>
    )
  }
}

export default Navbar;
