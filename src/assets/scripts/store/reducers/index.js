import '../../typedefs';

import contactReducer from './contacts';

/**
 * Root reducer
 * @param {Object} state - initialState
 * @param {ActionPayload} action - action
 * @returns {Object} - Combined reducers
 */
const rootReducer = (state, action) => {
  return {
    contacts: contactReducer(state.contacts, action),
  };
};

export default rootReducer;
