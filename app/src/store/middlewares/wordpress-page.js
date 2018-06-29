/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { PAGE_GET, pageReceive } from 'src/store/reducer';
import { formatWordpressPage } from 'src/utils/formatPages';

/*
 * Middleware
 */
const baseUrl = 'https://kodebou.com/wp-json/wp/v2/pages';

const createMiddleware = store => next => (action) => {
  next(action);

  switch (action.type) {
    case PAGE_GET: {
      axios.get(`${baseUrl}?slug=${action.pageSlug}`)
        .then((response) => {
          const page = response.data[0];
          store.dispatch(pageReceive(formatWordpressPage(page)));
        });
      break;
    }
    default:
  }
};

export default createMiddleware;
