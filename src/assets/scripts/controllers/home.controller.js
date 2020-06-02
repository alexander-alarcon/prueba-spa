import contactList from '../components/contactList';
import searchBar from '../components/searchBar';

const dummy = [
  {
    id: 1,
    name: 'Candi',
    address: 'Bentje',
    phone: 'cbentje0@mit.edu',
  },
  {
    id: 2,
    name: 'Carey',
    address: 'Stidworthy',
    phone: 'cstidworthy1@cargocollective.com',
  },
  {
    id: 3,
    name: 'Riki',
    address: 'MacEllen',
    phone: 'rmacellen2@princeton.edu',
  },
  {
    id: 4,
    name: 'Wini',
    address: 'Pray',
    phone: 'wpray3@yandex.ru',
  },
  {
    id: 5,
    name: 'Jen',
    address: 'Madsen',
    phone: 'jmadsen4@dell.com',
  },
  {
    id: 6,
    name: 'Clywd',
    address: 'Britner',
    phone: 'cbritner5@goodreads.com',
  },
  {
    id: 7,
    name: 'Jobi',
    address: 'Eykelbosch',
    phone: 'jeykelbosch6@1688.com',
  },
  {
    id: 8,
    name: 'Sherlock',
    address: 'Battista',
    phone: 'sbattista7@upenn.edu',
  },
  {
    id: 9,
    name: 'Glenine',
    address: 'Colnett',
    phone: 'gcolnett8@digg.com',
  },
  {
    id: 10,
    name: 'Mechelle',
    address: 'Owthwaite',
    phone: 'mowthwaite9@photobucket.com',
  },
];
localStorage.setItem('contacts', JSON.stringify(dummy));
let data = JSON.parse(localStorage.getItem('contacts'));

const searchBtnHandler = (e) => {
  console.log('Button was clicked');
};

const inputSearchHandler = (e) => {
  console.log(e.target.value);
};

const deleteContact = (id) => {
  const idx = data.findIndex((el) => el.id === id);
  if (idx > -1) {
    data.splice(idx, 1);
    localStorage.setItem('contacts', JSON.stringify(data));
    window.postMessage({ type: 'refresh' });
  }
};

function renderHomePage() {
  data = JSON.parse(localStorage.getItem('contacts'));
  const fragment = document.createDocumentFragment();
  fragment.appendChild(searchBar(searchBtnHandler, inputSearchHandler));
  fragment.appendChild(contactList(data, deleteContact));
  return fragment;
}

export default renderHomePage;
