// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
// Internals
import './styles.css';


const Results = ({ methods }) => (
  <div className="results-wrapper">
    <div className="results">
      {map(methods, (method)=> (
        <div key={method.id} className="result">
          <div className="method-details">
            <Link to={`/methods/${method.id}`}>
              <h1>{method.name}</h1>
            </Link>
            <h4>{method.description}</h4>
            <img alt={method.name} src={method.image} />
            <p><a href={method.URL}>Documentation</a></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Results;
