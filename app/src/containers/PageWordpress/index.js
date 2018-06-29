/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import PageWordpress from 'src/components/PageWordpress';
import { pageFind } from 'src/store/reducer';
/*
 * State
 */
const mapStateToProps = (state, ownProps) => ({
  page: state.pages[ownProps.slug],
});

/*
 * Actions
 */

const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ pageFind }, dispatch),
});

const PageWordpressContainer = connect(mapStateToProps, dispatchToProps)(PageWordpress);

export default PageWordpressContainer;
