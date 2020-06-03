import typedefs from '../typedefs/';

import Contact from './contact';

import generateId from '../utils/generateId';

import { getVisibleContacts } from '../store/selectors';
import store from '../store';

/**
 * Dispacth a delete action
 * @param {!MouseEvent} id - Contact's id to be deleted
 */
const handleClick = (e) => {
  const { target } = e;

  const action = target.getAttribute('data-action');

  if (action) {
    const ancestor = target.parentElement.parentElement;
    const id = ancestor.getAttribute('data-id');

    if (action === 'delete') {
      if (confirm('Eliminar?')) {
        store.dispatch({ type: 'REMOVE_CONTACT', payload: id });
      }
    }

    if (action === 'edit') {
      console.log(id);
    }
  }
};

/**
 * Dispacth an add action
 */
const handleAdd = () => {
  store.dispatch({
    type: 'ADD_CONTACT',
    payload: {
      id: generateId(),
      name: `Pepe ${Math.random() * 10}`,
      address: `Calle Falsa ${Math.floor(Math.random() * 999)}`,
      phone: 1234567,
    },
  });
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

  newContactButton.addEventListener('click', handleAdd);

  if (contacts.length === 0) {
    const pElement = document.createElement('p');
    pElement.textContent = 'No Contacts';
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
