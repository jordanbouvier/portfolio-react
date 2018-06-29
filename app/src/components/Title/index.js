/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */

const Title = ({ children }) => (
  <h3 className="default-title">{children}</h3>
);
Title.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Title;
