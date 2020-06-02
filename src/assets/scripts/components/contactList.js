import typedefs from '../typedefs/';

import Contact from './contact';
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
  contactListElement.appendChild(fragment);
  return contactListElement;
}

export default createContactListElement;
