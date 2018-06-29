/*
 * Npm import
 */

import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
const Text = ({ children }) => (
  <p className="default-text">{children}</p>
);
Text.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Text;
