/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/*
 * Component
 */
const Link = ({ to, label }) => (
  <li className="nav-item">
    <NavLink
      className="nav-link"
      to={to}
      activeClassName="nav-link--active"
    >
      {label}
    </NavLink>
  </li>
);
Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Link;
