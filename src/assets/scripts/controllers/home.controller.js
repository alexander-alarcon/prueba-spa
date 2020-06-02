import searchBar from '../components/searchBar';

const searchBtnHandler = (e) => {
  console.log('Button was clicked');
};

const inputSearchHandler = (e) => {
  console.log(e.target.value);
};

function renderHomePage() {
  const divElement = document.createElement('div');
  divElement.appendChild(searchBar(searchBtnHandler, inputSearchHandler));
  return divElement;
}

export default renderHomePage;
