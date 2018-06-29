/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */

import Title from 'src/components/Title';

/*
 * Component
 */
const ContactButton = ({ children, text }) => (
  <div className="contact-button">{children} {text}</div>
);
ContactButton.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default ContactButton;
