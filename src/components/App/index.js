// Dependencies
import React, { Component } from 'react';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
// Externals
import Navbar from '../Navbar';
import Results from '../Results';
import Footer from '../Footer';
// Internals
import METHODS from './METHODS';
import './styles.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMethods: METHODS,
    };
  }

  filterMethods = (filterOptions) => {
    let filteredMethods = METHODS;

    // Check if any filter options are enabled.
    if (includes(filterOptions, true)) {
      const { array, string, other, join, check, find, change } = filterOptions;
      if (array) {
        filteredMethods = filter(filteredMethods, ['dataType', 'array'])
      }
      if (string) {
        filteredMethods = filter(filteredMethods, ['dataType', 'string'])
      }
      if (other) {
        filteredMethods = filter(filteredMethods, ['dataType', 'other'])
      }
      if (join) {
        filteredMethods = filter(filteredMethods, ['goal', 'join'])
      }
      if (check) {
        filteredMethods = filter(filteredMethods, ['goal', 'check'])
      }
      if (find) {
        filteredMethods = filter(filteredMethods, ['goal', 'find'])
      }
      if (change) {
        filteredMethods = filter(filteredMethods, ['goal', 'change'])
      }
    }
    this.setState({ filteredMethods });
  }

  render() {
    return (
      <div className="App">
        <div className="warning-text">
          <p>Note: This application is not built for smaller devices.</p>
        </div>
        <div className="Navbar">
          <Navbar filterMethods={this.filterMethods} />
        </div>
        <div className="results-app">
          <Results methods={this.state.filteredMethods} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
