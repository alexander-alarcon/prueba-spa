import typedefs from '../typedefs/';

/**
 * Create a contact card
 * @param {!Contact} contact - Contact to be rendered
 * @param {!function} onEdit - Function that will be executed when edit button is clicked
 * @param {!function} onDelete - Function that will be executed when delete button is clicked
 * @returns {HTMLDivElement}
 */
function createContactElement(contact, onEdit, onDelete) {
  const contactTpl = document.getElementById('contact-tpl');
  const contactElement = contactTpl.content.cloneNode(true).firstElementChild;
  const name = contactElement.querySelector('.name-group').lastElementChild;
  const address = contactElement.querySelector('.address-group')
    .lastElementChild;
  const phone = contactElement.querySelector('.phone-group').lastElementChild;
  const buttons = contactElement.querySelector('.actions');

  name.textContent = contact.name;
  address.textContent = contact.address;
  phone.textContent = contact.phone;
  contactElement.dataset.id = contact.id;
  buttons.firstElementChild.addEventListener(
    'click',
    onEdit.bind(null, contact.id)
  );
  buttons.lastElementChild.addEventListener(
    'click',
    onDelete.bind(null, contact.id)
  );
  return contactElement;
}

export default createContactElement;
