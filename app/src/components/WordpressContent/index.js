/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local import
 */

/*
 * Component
 */

class WorpressContent extends React.Component {
  getHTML = () => ({
    __html: this.props.content,
  })
  render() {
    return (
      <div className="wordpress-content" dangerouslySetInnerHTML={this.getHTML()} />
    );
  }
}
WorpressContent.propTypes = {
  content: PropTypes.string.isRequired,
};
export default WorpressContent;
