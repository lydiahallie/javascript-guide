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
      <div className="show-method-wrapper">
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
          <p data-height="265" data-theme-id="dark" data-slug-hash="ZXzymb" data-default-tab="js" data-user="lydiahallie" data-embed-version="2" data-pen-title="ZXzymb" className="codepen">See the Pen <a href="https://codepen.io/lydiahallie/pen/ZXzymb/">ZXzymb</a> by Lydia Hallie (<a href="https://codepen.io/lydiahallie">@lydiahallie</a>) on <a href="https://codepen.io">CodePen</a>.</p>
          <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
        </div>
      </div>
    )
  }
}

export default showMethod;
