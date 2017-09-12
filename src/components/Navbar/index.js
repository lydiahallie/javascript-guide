// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
// Externals
import METHODS from '../App/METHODS';
// Internals
import MethodsList from './components/MethodsList';
const stringMethods = filter(METHODS, ['dataType', 'string']);
const arrayMethods = filter(METHODS, ['dataType', 'array']);


class Navbar extends Component {
  static propTypes = {
    filterMethods: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        array: false,
        string: false,
        other: false,
        check: false,
        find: false,
        join: false,
        change: false,
      },
    };
  }

  updateFilter = (key) => {
    const { filterOptions } = this.state;
    filterOptions[key] = !filterOptions[key];
    this.props.filterMethods(filterOptions);
    this.setState({ filterOptions });
  }

  render() {
    const { updateFilter } = this;
    const { filterOptions } = this.state;
    const { array, string, other, check, find, join, change } = filterOptions;

    return (
      <div className="navbar">
        <div className="button-row">
          <button
            disabled={array || other}
            onClick={() => updateFilter('string')}
          >
            String
          </button>
          <button
            disabled={string || other}
            onClick={() => updateFilter('array')}
          >
            Array
          </button>
          <button
            disabled={string || array}
            onClick={() => updateFilter('other')}
          >
            Other
          </button>
        </div>
        <div className="button-row">
          <button
            disabled={check || find || change}
            onClick={() => updateFilter('join')}
          >
            Join
          </button>
          <button
            disabled={join || find || change}
            onClick={() => updateFilter('check')}
          >
            Check
          </button>
          <button
            disabled={join || check || change}
            onClick={() => updateFilter('find')}
          >
            Find
          </button>
          <button
            disabled={join || find || check}
            onClick={() => updateFilter('change')}
          >
            Change
          </button>
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
