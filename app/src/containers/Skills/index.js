/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import Skills from 'src/components/Skills';

/*
 * Props
 */
const mapStateToProps = state => ({
  skills: state.skills,
});

/*
 * Actions
 */
const dispatchToProps = {};

/*
 * Container
 */

const SkillsContainer = connect(mapStateToProps, dispatchToProps)(Skills);

/*
 * Export
 */
export default SkillsContainer;
