import contactList from '../components/contactList';
import searchBar from '../components/searchBar';

import { getVisibleContacts } from '../store/selectors';
import generateId from '../utils/generateId';
import store from '../store';

const searchBtnHandler = (e) => {
  console.log('Button was clicked');
};

const inputSearchHandler = (e) => {
  console.log(e.target.value);
};

/**
 * Dispacth a delete action
 * @param {!string} id - Contact's id to be deleted
 */
const deleteContact = (id) => {
  store.dispatch({ type: 'REMOVE_CONTACT', payload: id });
};

/**
 * Dispacth an add action
 */
const addContact = () => {
  store.dispatch({
    type: 'ADD_CONTACT',
    payload: {
      id: generateId(),
      name: `Pepe ${Math.random() * 10}`,
      address: `Calle Falsa ${Math.floor(Math.random() * 999)}`,
      phone: 1234567,
    },
  });
};

function renderHomePage() {
  const contacts = getVisibleContacts();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(searchBar(searchBtnHandler, inputSearchHandler));
  fragment.appendChild(contactList(contacts, deleteContact, addContact));
  return fragment;
}

export default renderHomePage;
