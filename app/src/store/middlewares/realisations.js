/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { REALISATIONS_GET, REALISATION_CLICK, receiveRealisations, realisationOpen } from 'src/store/reducer';
import { sortRealisations } from 'src/utils/sortRealisation';


/*
 * Middleware
 */
const baseUrl = 'https://kodebou.com/wp-json/wp/v2/project?_embed';

const createMiddleware = store => next => (action) => {
  next(action);

  switch (action.type) {
    case REALISATIONS_GET: {
      axios.get(baseUrl)
        .then((response) => {
          const realisations = sortRealisations(response.data);
          store.dispatch(receiveRealisations(realisations));
        });
      break;
    }
    case REALISATION_CLICK: {
      const { realisations } = store.getState();
      const filterRealisation = realisations.find(realisation => realisation.id === action.id);
      if (filterRealisation) {
        store.dispatch(realisationOpen(filterRealisation));
      }
      break;
    }
    default:
  }
};

export default createMiddleware;
