import typedefs from '../typedefs/';

import renderModalElement, { attachModalContent } from './modal';
import cretateButtonElement from './button';
import Contact from './contact';

import generateId from '../utils/generateId';

import { getVisibleContacts } from '../store/selectors';
import store from '../store';

/**
 * Dispacth a delete action
 * @param {!MouseEvent} e - Event triggered when button is clicked
 */
const handleClick = (e) => {
  const { target } = e;

  const action = target.getAttribute('data-action');

  if (action) {
    e.preventDefault();

    const ancestor = target.parentElement.parentElement;
    const id = ancestor.getAttribute('data-id');

    if (action === 'delete') {
      const pElement = document.createElement('p');
      const fragment = document.createDocumentFragment();
      const cancelButton = cretateButtonElement(
        'Cancelar',
        () => {
          store.dispatch({ type: 'CLOSE_MODAL' });
        },
        'secondary'
      );
      const confirmButton = cretateButtonElement('Aceptar', () => {
        store.dispatch({ type: 'REMOVE_CONTACT', payload: id });
        store.dispatch({ type: 'CLOSE_MODAL' });
      });
      fragment.appendChild(cancelButton);
      fragment.appendChild(confirmButton);
      pElement.textContent =
        '¿Está seguro de que quiere eliminar este contacto?';
      attachModalContent(pElement, fragment);
      store.dispatch({ type: 'SHOW_MODAL' });
    }

    if (action === 'edit') {
      window.location.hash = `#/contact/edit/${id}`;
    }
  }
};

/**
 * Create the contact list
 * @returns {HTMLDivElement}
 */
function createContactListElement() {
  const contacts = getVisibleContacts();

  const contactListTpl = document.getElementById('contact-list-tpl');
  const contactListElement = contactListTpl.content.cloneNode(true)
    .firstElementChild;

  const listElement = contactListElement.querySelector('.list');
  const newContactButton = contactListElement.querySelector('button');

  const fragment = document.createDocumentFragment();

  if (contacts.length === 0) {
    const pElement = document.createElement('p');
    pElement.textContent = 'No hay contactos para mostrar';
    fragment.appendChild(pElement);
  } else {
    for (const contact of contacts) {
      const contactEl = Contact(contact);
      fragment.appendChild(contactEl);
    }
  }

  listElement.addEventListener('click', handleClick);
  listElement.appendChild(fragment);

  return contactListElement;
}

export default createContactListElement;
