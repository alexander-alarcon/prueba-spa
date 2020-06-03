import '../../typedefs';

import contactReducer from './contacts';
import searchReducer from './search';
import uiReducer from './ui';

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
    ui: uiReducer(state.ui, action),
  };
};

export default rootReducer;
