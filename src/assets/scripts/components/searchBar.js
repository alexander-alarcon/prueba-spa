import { getUserSearch } from '../store/selectors';
import store from '../store';

let focusTimeout;
let inputTimeout;

const handleSubmit = (e) => {
  e.preventDefault();
  clearTimeout(inputTimeout);

  store.dispatch({ type: 'TYPE_SEARCH', payload: e.target.search.value });
};

const handleInputChange = (e) => {
  clearTimeout(inputTimeout);

  inputTimeout = setTimeout(() => {
    store.dispatch({ type: 'TYPE_SEARCH', payload: e.target.value });
  }, 300);
};

/**
 * Render the search bar
 * @returns {HTMLDivElement}
 */
function createFormElement() {
  clearTimeout(focusTimeout);

  const search = getUserSearch();

  const searchBarTpl = document.getElementById('search-bar-tpl');
  const formElement = searchBarTpl.content.cloneNode(true).firstElementChild;
  const inputElement = formElement.querySelector('input[type="text"]');

  formElement.addEventListener('submit', handleSubmit);
  inputElement.addEventListener('input', handleInputChange);

  inputElement.value = search;

  focusTimeout = setTimeout(() => {
    inputElement.focus();
  }, 100);

  return formElement;
}

export default createFormElement;
