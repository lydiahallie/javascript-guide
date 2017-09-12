// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Link } from 'react-router-dom';


const MethodsList = (props) => (
  <div className="methods">
    <h5>{props.label}</h5>
    {map(props.methods, (method, index)=> (
      <Link key={method.id} to={`/methods/${method.id}`}>
        <p id="method-name-p">{method.name}</p>
      </Link>
    ))}
  </div>
);

MethodsList.propTypes = {
  label: PropTypes.string.isRequired,
  methods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MethodsList;
