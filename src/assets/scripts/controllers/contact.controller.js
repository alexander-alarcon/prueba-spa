import '../typedefs';

import createContactFormElement from '../components/contactForm';
import { getUserById } from '../store/selectors';

/**
 * Render the contact page
 * @param {URLParams=} params - if params form is filled
 * @returns {DocumentFragment}
 */
function createContactPage({ id } = {}) {
  let contact;

  if (typeof id !== 'undefined') {
    contact = getUserById(id);
    if (!contact) window.location.hash = '#/404';
  }

  const fragment = document.createDocumentFragment();
  fragment.appendChild(createContactFormElement({ contact }));
  return fragment;
}

export default createContactPage;
