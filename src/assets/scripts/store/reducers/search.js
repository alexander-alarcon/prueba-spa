import '../../typedefs';

/**
 * Reducer for contacts
 * @param {SearchState} state - initialState
 * @param {ActionPayload} action
 * @returns {SearchState}
 */
const searchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'TYPE_SEARCH': {
      return payload;
    }
    default:
      return state;
  }
};

export default searchReducer;
