/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import ReactTransitionGroup from 'react-transition-group/R';

/*
 * Local import
 */
import WordpressContent from 'src/components/WordpressContent';
import Title from 'src/components/Title';
/*
 * Component
 */
class RealisationShow extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }
  getImgHtml = () => ({
    __html: this.props.realisation.images,
  })
  handleNext = () => {
    this.props.actions.realisationNext();
  }
  handlePrevious = () => {
    this.props.actions.realisationPrevious();
  }
  handleClose = (evt) => {
    console.log(evt);
    document.body.classList.remove('app--realisation-open');
    this.props.actions.realisationClose();
  }
  handleKey = (evt) => {
    const { code } = evt;
    switch (code) {
      case 'ArrowLeft':
        this.handlePrevious();
        break;
      case 'ArrowRight':
        this.handleNext();
        break;
      case 'Escape':
        this.handleClose();
        break;
      default:
    }
  }
  render() {
    const { title, content } = this.props.realisation;
    const { transitionName } = this.props;
    console.log(transitionName);
    return (
      <div className="realisation-show" onKeyDown={this.handleKey}>
        <div className="realisation-show-black-background" onClick={this.handleClose} />
        <div className="realisation-show-arrow-left" onClick={this.handlePrevious} />
        <div className="realisation-show-arrow-right" onClick={this.handleNext} />
        <CSSTransitionGroup
          component="div"
          transitionName={transitionName}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1000}
        >
          <div key={title} className="realisation-show-content">
            <div
              className="realisation-show-content-pictures"
              dangerouslySetInnerHTML={this.getImgHtml()}
            />
            <div className="realisation-show-content-description">
              <Title>{title}</Title>
              <WordpressContent content={content} />
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}
RealisationShow.propTypes = {
  realisation: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  transitionName: PropTypes.string,
};
RealisationShow.defaultProps = {
  transitionName: 'none',
};

export default RealisationShow;
