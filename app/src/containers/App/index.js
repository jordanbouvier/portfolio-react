/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import App from 'src/components/App';
import { getRealisations, pageGet, skillsGet } from 'src/store/reducer';
/*
 * State
 */
const mapStateToProps = () => ({});

/*
 * Actions
 */

const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ getRealisations, pageGet, skillsGet }, dispatch),
});

const AppContainer = connect(mapStateToProps, dispatchToProps)(App);

export default withRouter(AppContainer);
