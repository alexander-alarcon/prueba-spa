const initialState = {
  isModalOpen: false,
};

/**
 * Reducer for ui components
 * @param {Object} state - initialState
 * @param {ActionPayload} action
 * @returns {Object}
 */
const uiReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
