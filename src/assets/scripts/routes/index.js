import { pages } from '../controllers/';

import renderModalElement from '../components/modal';

import store from '../store/';

/**
 * Handle App routes
 * @param {!string} route - Url hash
 */
const router = async (route) => {
  let mainElement = document.getElementById('page');

  store.subscribe(({ contacts }) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    render();
  });

  function render() {
    mainElement.innerHTML = '';

    switch (route) {
      case '':
      case '#/':
        mainElement.appendChild(pages.home());
        break;
      default:
        mainElement.appendChild(pages.notFound());
        break;
    }

    renderModalElement();
  }

  render();
};

export { router };
