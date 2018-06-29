/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Component
 */

class Realisation extends React.Component {
  handleClick = () => {
    const { id } = this.props;
    document.body.classList.add('app--realisation-open');
    this.props.actions.realisationClick(id);
  }
  render() {
    const { title, thumbnail } = this.props;
    return (
      <div className="realisation" onClick={this.handleClick}>
        <h3 className="realisation-title">
          <span className="realisation-title-content">{title}</span>
        </h3>
        <img src={thumbnail} className="realisation-thumbnail" alt={`miniature projet ${title}`} />
      </div>
    );
  }
}
Realisation.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


export default Realisation;
