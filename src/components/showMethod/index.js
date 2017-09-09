import React, { Component} from 'react';
import METHODS from '../../assets/data/methods.js';
import find from 'lodash/find';
import './styles.css';

class showMethod extends Component {
  render() {
    const method = find(METHODS, ['id', parseInt(this.props.match.params.id)]);
    return(
      <div className="show-method">
        <div className="show-method-header">
          <h1>{method.name}</h1>
          <p>{method.description}</p>
          <img src={method.image} />
          <p>{method.explanation}</p>
        </div>
      </div>
    )
  }
}

export default showMethod;
