/*
 * Npm import
 */


/*
 * Local import
 */


/*
 * Initial state
 */
const initialState = {
  realisations: [],
  realisationOpen: false,
  openedRealisation: {},
  pages: {},
  currentPage: {},
  skills: [],
  navOpen: false,
};

/*
 * Actions
 */
export const REALISATIONS_GET = 'REALISATIONS_GET';
export const REALISATIONS_RECEIVE = 'REALISATIONS_RECEIVE';

export const REALISATION_CLICK = 'REALISATION_CLICK';
export const REALISATION_OPEN = 'REALISATION_OPEN';
export const REALISATION_CLOSE = 'REALISATION_CLOSE';
export const REALISATION_GET = 'REALISATION_GET';
export const REALISATION_NEXT = 'REALISATION_NEXT';
export const REALISATION_PREVIOUS = 'REALISATION_PREVIOUS';


export const SKILLS_RECEIVE = 'SKILLS_RECEIVE';
export const SKILLS_GET = 'SKILLS_GET';

export const PAGE_GET = 'PAGE_GET';
export const PAGE_RECEIVE = 'PAGE_RECEIVE';
export const PAGE_FIND = 'PAGE_FIND';

export const NAV_TOGGLE = 'NAV_TOGGLE';


/*
 * Reducer
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REALISATIONS_RECEIVE: {
      return {
        ...state,
        realisations: action.realisations,
      };
    }
    case REALISATION_OPEN: {
      return {
        ...state,
        realisationOpen: true,
        openedRealisation: action.openedRealisation,
      };
    }
    case REALISATION_CLOSE: {
      return {
        ...state,
        realisationOpen: false,
        openedRealisation: {},
      };
    }
    case REALISATION_NEXT: {
      const { realisations } = state;
      if (realisations.length === 0) {
        break;
      }
      let nextRealisationIndex = realisations.indexOf(state.openedRealisation) + 1;
      const countRealisations = realisations.length;
      if (nextRealisationIndex >= countRealisations) {
        nextRealisationIndex = 0;
      }
      return {
        ...state,
        openedRealisation: realisations[nextRealisationIndex],
        transitionName: 'realisation-show--next',
      };
    }
    case REALISATION_PREVIOUS: {
      const { realisations } = state;
      if (realisations.length === 0) {
        break;
      }
      let previousRealisationIndex = realisations.indexOf(state.openedRealisation) - 1;
      const countRealisations = realisations.length;
      if (previousRealisationIndex < 0) {
        previousRealisationIndex = countRealisations - 1;
      }
      return {
        ...state,
        openedRealisation: realisations[previousRealisationIndex],
        transitionName: 'realisation-show--previous',
      };
    }
    case PAGE_RECEIVE: {
      return {
        ...state,
        pages: { ...state.pages, [action.page.slug]: action.page },
      };
    }
    case PAGE_FIND: {
      const currentPage = state.pages.find(page => page.slug === action.slug);
      if (currentPage) {
        return {
          ...state,
          currentPage,
        };
      }
      return state;
    }
    case SKILLS_RECEIVE: {
      return {
        ...state,
        skills: action.skills,
      };
    }
    case NAV_TOGGLE: {
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    }
    default:
      return state;
  }
};

/*
 * Action creator
 */


export const getRealisations = () => ({
  type: REALISATIONS_GET,
});
export const receiveRealisations = realisations => ({
  type: REALISATIONS_RECEIVE,
  realisations,
});

export const getRealisation = () => ({
  type: REALISATION_GET,
});
export const realisationClick = id => ({
  type: REALISATION_CLICK,
  id,
});
export const realisationOpen = openedRealisation => ({
  type: REALISATION_OPEN,
  openedRealisation,
});
export const realisationClose = () => ({
  type: REALISATION_CLOSE,
});
export const realisationNext = () => ({
  type: REALISATION_NEXT,
});
export const realisationPrevious = () => ({
  type: REALISATION_PREVIOUS,
});
export const pageGet = pageSlug => ({
  type: PAGE_GET,
  pageSlug,
});
export const pageReceive = page => ({
  type: PAGE_RECEIVE,
  page,
});
export const pageFind = slug => ({
  type: PAGE_FIND,
  slug,
});
export const skillsRecieve = skills => ({
  type: SKILLS_RECEIVE,
  skills,
});
export const skillsGet = () => ({
  type: SKILLS_GET,
});
export const toggleNav = () => ({
  type: NAV_TOGGLE,
});

/*
 * Export default
 */
export default reducer;
