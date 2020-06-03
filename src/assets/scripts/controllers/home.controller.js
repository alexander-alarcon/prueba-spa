import contactList from '../components/contactList';
import searchBar from '../components/searchBar';

import { getVisibleContacts } from '../store/selectors';
import generateId from '../utils/generateId';
import store from '../store';

function createHomePage() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(searchBar());
  fragment.appendChild(contactList());
  return fragment;
}

export default createHomePage;
