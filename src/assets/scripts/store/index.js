import '../typedefs';
import rootReducer from './reducers';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || {},
};

/**
 * @callback storeCallback
 * @param {ContactState}
 * @returns {Object}
 */
const store = ((initialState, reducers) => {
  let state = reducers(initialState, {});
  let listeners = [];

  /**
   * @returns {ContactState}
   */
  function getState() {
    return state;
  }

  /**
   * dispatchs an action
   * @param {ActionPayload} action
   */
  function dispatch(action) {
    state = reducers(state, action);

    listeners.forEach((listener) => {
      listener(state);
    });
  }

  /**
   * returns a unsubscribe function
   * @param {function} listener
   * @returns {function}
   */
  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
})(initialState, rootReducer);

export default store;
