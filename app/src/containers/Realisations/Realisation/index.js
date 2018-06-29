/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Realisation from 'src/components/Realisations/Realisation';
import { realisationClick } from 'src/store/reducer';

/*
 * Props
 */
const mapStateToProps = () => ({});

/*
 * Actions
 */
const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ realisationClick }, dispatch),
});

/*
 * Container
 */

const RealisationContainer = connect(mapStateToProps, dispatchToProps)(Realisation);

/*
 * Export
 */
export default RealisationContainer;
