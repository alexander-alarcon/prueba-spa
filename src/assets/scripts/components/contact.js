import '../typedefs/';

/**
 * Create a contact card
 * @param {!Contact} contact - Contact to be rendered
 * @returns {HTMLDivElement}
 */
function createContactElement(contact) {
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

  return contactElement;
}

export default createContactElement;
