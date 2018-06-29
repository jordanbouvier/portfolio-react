/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import RealisationShow from 'src/components/Realisations/RealisationShow';
import { realisationClose, realisationNext, realisationPrevious } from 'src/store/reducer';

/*
 * Props
 */
const mapStateToProps = state => ({
  realisation: state.openedRealisation,
  transitionName: state.transitionName,
});

/*
 * Actions
 */
const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ realisationClose, realisationNext, realisationPrevious }, dispatch),
});

/*
 * Container
 */

const RealisationShowContainer = connect(mapStateToProps, dispatchToProps)(RealisationShow);

/*
 * Export
 */
export default RealisationShowContainer;
