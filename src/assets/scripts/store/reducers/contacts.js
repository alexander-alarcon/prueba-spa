import '../../typedefs';

/**
 * Reducer for contacts
 * @param {ContactState} state - initialState
 * @param {ActionPayload} action
 * @returns {ContactState}
 */
const contactReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT': {
      const { id } = payload;
      return {
        ...state,
        [id]: payload,
      };
    }
    case 'EDIT_CONTACT': {
      const { id } = payload;
      return {
        ...state,
        [id]: payload,
      };
    }
    case 'REMOVE_CONTACT': {
      const id = payload;
      const { [id]: deletedKey, ...contacts } = state;
      return contacts;
    }
    default:
      return state;
  }
};

export default contactReducer;
