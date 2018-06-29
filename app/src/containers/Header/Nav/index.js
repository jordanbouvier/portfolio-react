/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Nav from 'src/components/Header/Nav';
import { toggleNav } from 'src/store/reducer';

/*
 * Props
 */
const mapStateToProps = state => ({
  navOpen: state.navOpen,
});

/*
 * Actions
 */
const dispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleNav }, dispatch),
});

/*
 * Container
 */

const NavContainer = connect(mapStateToProps, dispatchToProps)(Nav);

/*
 * Export
 */
export default NavContainer;
