import contactList from '../components/contactList';
import searchBar from '../components/searchBar';

const searchBtnHandler = (e) => {
  console.log('Button was clicked');
};

const inputSearchHandler = (e) => {
  console.log(e.target.value);
};

const dummyData = [
  {
    id: '5ed67015fc13ae3c77000000',
    name: 'Maxim',
    phone: 'Blow',
    address: 'mblow0@opera.com',
  },
  {
    id: '5ed67015fc13ae3c77000001',
    name: 'Miof mela',
    phone: 'Barcke',
    address: 'mbarcke1@w3.org',
  },
  {
    id: '5ed67015fc13ae3c77000002',
    name: 'Dolli',
    phone: "O'Giany",
    address: 'dogiany2@google.co.jp',
  },
  {
    id: '5ed67015fc13ae3c77000003',
    name: 'Steven',
    phone: 'Stemp',
    address: 'sstemp3@ehow.com',
  },
  {
    id: '5ed67015fc13ae3c77000004',
    name: 'Kirby',
    phone: 'Ram',
    address: 'kram4@walmart.com',
  },
  {
    id: '5ed67015fc13ae3c77000005',
    name: 'Claire',
    phone: 'Hamber',
    address: 'chamber5@fotki.com',
  },
  {
    id: '5ed67015fc13ae3c77000006',
    name: 'Karola',
    phone: 'Moen',
    address: 'kmoen6@slideshare.net',
  },
  {
    id: '5ed67015fc13ae3c77000007',
    name: 'Martica',
    phone: 'Eannetta',
    address: 'meannetta7@fastcompany.com',
  },
  {
    id: '5ed67015fc13ae3c77000008',
    name: 'Agathe',
    phone: 'Stowgill',
    address: 'astowgill8@craigslist.org',
  },
  {
    id: '5ed67015fc13ae3c77000009',
    name: 'Mandy',
    phone: 'Ronnay',
    address: 'mronnay9@dedecms.com',
  },
];

function renderHomePage() {
  const divElement = document.createElement('div');
  divElement.appendChild(searchBar(searchBtnHandler, inputSearchHandler));
  divElement.appendChild(contactList(dummyData));
  return divElement;
}

export default renderHomePage;
