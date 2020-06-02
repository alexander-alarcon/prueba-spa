import typedefs from '../typedefs/';

/**
 * Create a contact card
 * @param {!Contact} contact - Contact to be rendered
 */
function createContactElement(contact) {
  const pElement = document.createElement('p');
  pElement.textContent = contact.name;

  return pElement;
}

export default createContactElement;
