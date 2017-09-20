// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Codepen from 'react-codepen';
import find from 'lodash/find';
// Externals
import App from '../App';
import METHODS from '../App/METHODS';
// Internals
import './styles.css';


const showMethod = ({ match }) => {
  const method = find(METHODS, ['id', parseInt(match.params.id, 10)]);

  return (
    <div className="show-method-wrapper">
      <div className="show-method">
        <div className="show-method-header">
          <div className="back-btn">
            <Link to="/" component={App}>
              <p>Back</p>
            </Link>
          </div>
          <h1>{method.name}</h1>
          <img alt={method.name} src={method.image} />
          <div className="explanation-text">{method.explanation}</div>
        </div>
        <p id="try-code">Try it yourself! Copy the code and paste it in your console.</p>
        <div className="codepen-wrapper">
          <Codepen user="lydiahallie" hash={method.hash} tab="js"></Codepen>
        </div>
        <p id="documentation"><a href={method.URL}>Documentation</a></p>
      </div>
    </div>
  );
}

export default showMethod;
