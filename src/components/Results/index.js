import React, { Component } from 'react';
import map from 'lodash/map';
import METHODS from '../../assets/data/methods.js';

export default class Results extends Component {
  render() {
    return(
      <div className="results">
        {map(METHODS, (method)=> (
          <div className="result">
            <div className="method-details">
              <h1 id="product-name">{method.name}</h1>
              <h4 id="product-description">{method.description}</h4>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
