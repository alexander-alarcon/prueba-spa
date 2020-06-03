/**
 * @typedef {"primary" | "cancel"} ButtonType
 */

/**
 * Creates a button
 * @param {!string} text - Button's text
 * @param {!function} onClick - Function that will be executed when the button is clicked
 * @param {ButtonType=} type - Button type
 * @returns {HTMLButtonElement}
 */
function cretateButtonElement(text, onClick, type = 'primary') {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = `btn btn-${type}`;
  button.addEventListener('click', onClick);

  return button;
}

export default cretateButtonElement;
