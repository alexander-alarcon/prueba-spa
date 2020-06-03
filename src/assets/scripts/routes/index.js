import { pages } from '../controllers/';

import renderModalElement from '../components/modal';

import store from '../store/';

/**
 * Returns params given a urls
 * @param {} match
 * @param {} path
 */
function extractParamsFromMatch(match, path) {
  const sliceHash = path.split('/').slice(1);

  return match
    .split('/')
    .slice(1)
    .reduce((params, part, index) => {
      if (/^:/.test(part)) {
        params[part.slice(1)] = sliceHash[index];
      }
      return params;
    }, {});
}

/**
 *
 * @param {} path
 */
function pathToRegex(path) {
  // prettier-ignore
  const regex = path.replace('/', '\/').replace(/:(\w+)/gi, '(\\w+)');
  return new RegExp(regex + '$');
}

/**
 * Handle App routes
 * @param {!string} route - Url hash
 */
const router = async (hash) => {
  let mainElement = document.getElementById('page');

  store.subscribe(({ contacts }) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    render();
  });

  function render() {
    mainElement.innerHTML = '';

    myFor: for (let page of pages) {
      let match;

      if (Array.isArray(page.path)) {
        match = page.path.filter((path) => {
          return pathToRegex(path).test(hash);
        })[0];
      } else if (page.path !== '*') {
        match = pathToRegex(page.path).test(hash) && page.path;
      } else {
        match = '#/';
      }

      if (match) {
        const params = extractParamsFromMatch(match, hash);
        mainElement.appendChild(page.component(params));
        break myFor;
      }
    }

    renderModalElement();
  }

  render();
};

export { router };
