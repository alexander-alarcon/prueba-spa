import { pages } from '../controllers/index';

const router = async (route) => {
  let mainElement = document.getElementById('page');

  mainElement.innerHTML = '';

  switch (route) {
    case '':
    case '#/':
      return mainElement.appendChild(pages.home());
    default:
      return mainElement.appendChild(pages.notFound());
  }
};

export { router };
