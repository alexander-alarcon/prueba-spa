import store from './';

/**
 * Return contacts with or without filters
 * @param {string=} filter
 * @returns {Contact[]}
 */
export const getVisibleContacts = () => {
  const { contacts, search } = store.getState();

  const results = Object.keys(contacts)
    .map((key) => contacts[key])
    .sort((a, b) => {
      if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
      if (b.name.toLowerCase() < a.name.toLowerCase()) return 1;
      return 0;
    });

  const searchValue = search.trim().toLowerCase();

  if (searchValue) {
    return results.filter((contact) => {
      return contact.name.toLowerCase().includes(searchValue);
    });
  }

  return results;
};

/**
 * Returns input filter value
 * @returns {string}
 */
export const getUserSearch = () => {
  const { search } = store.getState();
  return search;
};

/**
 * Returns a contact
 * @param {!string} id - Contact identifier
 * @returns {(Contact|undefined)} Contact if exist or undifined
 */
export const getUserById = (id) => {
  const { contacts } = store.getState();

  return contacts[id];
};

/**
 * Returns modal status
 * @returns {boolean} true if modal is open
 */
export const getModalStatus = () => {
  const {
    ui: { isModalOpen },
  } = store.getState();
  return isModalOpen;
};
