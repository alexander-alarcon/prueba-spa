import typedefs from '../typedefs/';

import Contact from './contact';

const editHandler = (id) => {
  console.log(`Editing contact with id: ${id}`);
};

const deleteHandler = (id) => {
  console.log(`Deleting contact with id: ${id}`);
};

/**
 * Create the contact list
 * @param {!Contact[]} contacts - array of contacts to be rendered
 * @returns {HTMLDivElement}
 */
function createContactListElement(contacts) {
  const contactListTpl = document.getElementById('contact-list-tpl');
  const contactListElement = contactListTpl.content.cloneNode(true)
    .firstElementChild;
  const fragment = document.createDocumentFragment();
  const newContactButton = document.createElement('button');
  newContactButton.textContent = 'Nuevo';
  newContactButton.className = 'btn btn-primary mt-4';
  if (contacts.length === 0) {
    const pElement = document.createElement('p');
    pElement.textContent = 'No Contacts';
    fragment.appendChild(pElement);
  } else {
    for (const contact of contacts) {
      const contactEl = Contact(contact, editHandler, deleteHandler);
      fragment.appendChild(contactEl);
    }
  }
  contactListElement.appendChild(fragment);
  contactListElement.appendChild(newContactButton);
  return contactListElement;
}

export default createContactListElement;
