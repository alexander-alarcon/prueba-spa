import { pages } from '../controllers/index';

const router = async (route) => {
  let mainElement = document.getElementById('page');

  window.addEventListener('message', ({ data }) => {
    if (data.type === 'refresh') {
      render();
    }
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
  }

  render();
};

export { router };
