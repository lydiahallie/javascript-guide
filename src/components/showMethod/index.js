import React, { Component} from 'react';
import METHODS from '../../assets/data/methods.js';
import App from '../App';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import './styles.css';
import Codepen from 'react-codepen';

class showMethod extends Component {
  render() {
    const method = find(METHODS, ['id', parseInt(this.props.match.params.id)]);
    return(
      <div className="show-method-wrapper">
        <div className="show-method">
          <div className="show-method-header">
            <div className="back-btn">
              <Link to="/" component={App}>
                <p>Back</p>
              </Link>
            </div>
            <h1>{method.name}</h1>
            <img src={method.image} />
            <p className="explanation">{method.explanation}</p>
          </div>
          <p id="try-code">Try it yourself! Copy the code and paste it in your console.</p>
          <div className="codepen-wrapper">
            <Codepen user="lydiahallie" hash={method.hash} tab="js"></Codepen>
          </div>
          <p id="documentation"><a href={method.URL}>Documentation</a></p>
        </div>
      </div>
    )
  }
}

export default showMethod;
