import React, { Component } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import METHODS from '../../assets/data/methods.js';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './styles.css';

class Results extends Component {
  render() {
    const methods = METHODS;
    return (
      <div className="results-wrapper">
        <div className="wrapper">
          <Navbar />
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

export default Results;
