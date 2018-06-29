/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { SKILLS_GET, skillsRecieve } from 'src/store/reducer';
import { sortSkills } from 'src/utils/sortSkills';


/*
 * Middleware
 */
const baseUrl = 'https://kodebou.com/wp-json/wp/v2/skills?_embed';

const createMiddleware = store => next => (action) => {
  next(action);

  switch (action.type) {
    case SKILLS_GET: {
      axios.get(baseUrl)
        .then((response) => {
          const realisations = sortSkills(response.data);
          store.dispatch(skillsRecieve(realisations));
        });
      break;
    }
    default:
  }
};

export default createMiddleware;
