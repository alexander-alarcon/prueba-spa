/**
 * Render the search bar
 * @param {!function} btnAction - function that will be executed when the button is clicked
 * @param {!function} inputAction - function that will be executed when the input changes its value
 * @returns {HTMLDivElement}
 */
function renderSearchBar(btnAction, inputAction) {
  const searchBarTpl = document.getElementById('search-bar-tpl');
  const searchBarElement = searchBarTpl.content.cloneNode(true);
  const btn = searchBarElement.querySelector('button');
  const input = searchBarElement.querySelector('input[type="text"]');
  btn.addEventListener('click', btnAction);
  input.addEventListener('input', inputAction);
  return searchBarElement;
}

export default renderSearchBar;
