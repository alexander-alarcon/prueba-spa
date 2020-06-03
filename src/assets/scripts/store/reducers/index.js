import '../../typedefs';

import contactReducer from './contacts';
import searchReducer from './search';

/**
 * Root reducer
 * @param {Object} state - initialState
 * @param {ActionPayload} action - action
 * @returns {Object} - Combined reducers
 */
const rootReducer = (state, action) => {
  return {
    contacts: contactReducer(state.contacts, action),
    search: searchReducer(state.search, action),
  };
};

export default rootReducer;
