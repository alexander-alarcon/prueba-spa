import store from './';

/**
 * Return contacts with or without filters
 * @param {string=} filter
 * @returns {Object}
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
 * Returns modal status
 * @returns {boolean}
 */
export const getModalStatus = () => {
  const {
    ui: { isModalOpen },
  } = store.getState();
  return isModalOpen;
};
