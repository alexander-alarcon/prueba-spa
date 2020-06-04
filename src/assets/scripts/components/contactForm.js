import typedefs from '../typedefs/';

import { attachModalContent } from './modal';

import { getUserById } from '../store/selectors';
import generateId from '../utils/generateId';
import store from '../store';

/**
 * Handle form submission
 * @param {Event} e - Event triggered when form is submited
 */
const handleFormSubmit = (e) => {
  e.preventDefault();

  const { target } = e;

  if (
    target.name.value.trim() === '' ||
    target.address.value.trim() === '' ||
    target.phone.value.trim() === ''
  ) {
    const pElement = document.createElement('p');
    pElement.textContent = 'Todos los campos son obligatorios';
    attachModalContent(pElement);
    store.dispatch({ type: 'SHOW_MODAL' });
    return;
  }
  /**
   * @type {Contact}
   */
  const contact = {
    id: target.id.value,
    name: target.name.value,
    address: target.address.value,
    phone: target.phone.value,
  };

  if (contact.id) {
    store.dispatch({
      type: 'EDIT_CONTACT',
      payload: contact,
    });
  } else {
    store.dispatch({
      type: 'ADD_CONTACT',
      payload: {
        ...contact,
        id: generateId(),
      },
    });
  }

  window.location.hash = '';
};

/**
 * Create the contact form
 * @param {FormParams=} contact
 * @returns {HTMLFormElement}
 */
function createContactFormElement({ contact } = {}) {
  const contactFormTpl = document.getElementById('contact-form-tpl');
  const contactFormElement = contactFormTpl.content.cloneNode(true)
    .firstElementChild;

  contactFormElement.addEventListener('submit', handleFormSubmit);

  if (contact) {
    contactFormElement.querySelector('input[name="id"]').value = contact.id;
    contactFormElement.querySelector('input[name="name"]').value = contact.name;
    contactFormElement.querySelector('input[name="address"]').value =
      contact.address;
    contactFormElement.querySelector('input[name="phone"]').value =
      contact.phone;
  }

  return contactFormElement;
}

export default createContactFormElement;
