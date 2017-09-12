import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import METHODS from '../../../../assets/data/methods.js';
import filter from 'lodash/filter';
import { Link } from 'react-router-dom';


const MethodsList = (props) => (
  <div className="methods">
    <h5>{props.label}</h5>
    {map(props.methods, (method)=> (
      <Link to={`/methods/${method.id}`}>
        <p id="method-name-p">{method.name}</p>
      </Link>
    ))}
  </div>
);

MethodsList.propTypes = {
  label: PropTypes.string.isRequired,
  methods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MethodsList;
