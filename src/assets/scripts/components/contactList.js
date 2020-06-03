import typedefs from '../typedefs/';

import { attachModalContent } from './modal';
import Contact from './contact';

import generateId from '../utils/generateId';

import { getVisibleContacts } from '../store/selectors';
import store from '../store';

/**
 * Dispacth a delete action
 * @param {!MouseEvent} e - Event that was triggered
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
  /* store.dispatch({
    type: 'ADD_CONTACT',
    payload: {
      id: generateId(),
      name: `Pepe ${Math.random() * 10}`,
      address: `Calle Falsa ${Math.floor(Math.random() * 999)}`,
      phone: 1234567,
    },
  }); */
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed non lacus pulvinar, accumsan nulla at, varius nibh.
      Curabitur malesuada maximus rutrum. Duis tincidunt lorem ut pellentesque congue.
      Sed ac pretium justo. Vestibulum semper est non purus lobortis volutpat. Proin justo magna,
    </p>
  `;
  attachModalContent(divElement);
  store.dispatch({ type: 'SHOW_MODAL' });
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
