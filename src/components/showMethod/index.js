import React, { Component} from 'react';
import METHODS from '../../assets/data/methods.js';
import App from '../App';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import './styles.css';

class showMethod extends Component {
  render() {
    const method = find(METHODS, ['id', parseInt(this.props.match.params.id)]);
    return(
      <div>
        <div className="back-btn">
          <Link to="/" component={App}>
            <p>Back</p>
          </Link>
        </div>
        <div className="show-method">
          <div className="show-method-header">
            <h1>{method.name}</h1>
            <p>{method.description}</p>
            <img src={method.image} />
            <p>{method.explanation}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default showMethod;
