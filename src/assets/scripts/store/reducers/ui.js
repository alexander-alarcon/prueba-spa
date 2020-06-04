const initialState = {
  isModalOpen: false,
};

/**
 * Reducer for ui components
 * @param {UIState} state - initialState
 * @param {ActionPayload} action
 * @returns {UIState}
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
