/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';


/*
 * Local import
 */
import reducer from 'src/store/reducer';
import realisationsMiddleware from 'src/store/middlewares/realisations';
import wordpressPagesMiddleware from 'src/store/middlewares/wordpress-page';
import skillsMiddleware from 'src/store/middlewares/skills';
/*
 * Store
 */

const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}
const realisationEnhancer = applyMiddleware(realisationsMiddleware);
const wordpressPagesEnhancer = applyMiddleware(wordpressPagesMiddleware);
const skillsEnhancer = applyMiddleware(skillsMiddleware);
const enhancers = compose(realisationEnhancer, wordpressPagesEnhancer, skillsEnhancer, ...devTools);
const store = createStore(reducer, enhancers);


export default store;
