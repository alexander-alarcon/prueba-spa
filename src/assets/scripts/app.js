import 'regenerator-runtime';

import { toggleNavbar } from './components/navbar';
import { router } from './routes';

const init = () => {
  const btnMenu = document.getElementById('btn-menu');

  router(window.location.hash);

  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });

  btnMenu.addEventListener('click', toggleNavbar);
};

window.addEventListener('load', init);
