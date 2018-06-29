/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Realisations from 'src/components/Realisations';
import { getRealisations } from 'src/store/reducer';

/*
 * Props
 */
const mapStateToProps = state => ({
  realisations: state.realisations,
  openedRealisation: state.openedRealisation,
  realisationOpen: state.realisationOpen,
});

/*
 * Actions
 */
const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ getRealisations }, dispatch),
});

/*
 * Container
 */

const RealisationsContainer = connect(mapStateToProps, dispatchToProps)(Realisations);

/*
 * Export
 */
export default RealisationsContainer;
