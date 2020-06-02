import store from './';

/**
 * Return contacts with or without filters
 * @param {string=} filter
 * @returns {Object}
 */
const getVisibleContacts = (filter) => {
  const { contacts } = store.getState();

  const f = '99';
  if (f) {
    return Object.keys(contacts)
      .map((key) => contacts[key])
      .filter((contact) => {
        console.log(contact);
        return contact.name.toLowerCase().includes(f.toLowerCase());
      });
  }

  return Object.keys(contacts).map((key) => contacts[key]);
};

export { getVisibleContacts };
