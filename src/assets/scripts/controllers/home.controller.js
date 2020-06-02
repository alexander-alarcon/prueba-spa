export default () => {
  const ulElement = document.createElement('ul');
  const fragment = document.createDocumentFragment();
  [1, 2, 3, 4, 5].forEach((el) => {
    const liElement = document.createElement('li');
    liElement.textContent = `item ${el}`;
    fragment.appendChild(liElement);
  });
  ulElement.appendChild(fragment);

  return ulElement;
};
