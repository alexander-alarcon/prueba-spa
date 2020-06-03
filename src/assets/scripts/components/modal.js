import { getModalStatus } from '../store/selectors';
import store from '../store';

function handleCloseModal() {
  store.dispatch({ type: 'CLOSE_MODAL' });
}

/**
 *
 * @param {!HTMLElement} content - Modal's body
 * @param {HTMLElement=} actions - Modal's action buttons
 */
export function attachModalContent(content, actions) {
  const modalElement = document.querySelector('.modal');
  const modalBody = modalElement.querySelector('.modal-body > div:last-child');

  modalBody.appendChild(content);

  if (actions) {
    const modalActions = modalElement.querySelector('.modal-actions');
    modalActions.appendChild(actions);
  }
}

/**
 * Render a modal
 * @returns {HTMLDivElement}
 */
function renderModalElement() {
  const isOpen = getModalStatus();
  const modalElement = document.querySelector('.modal');
  const modalOverlay = modalElement.querySelector('.modal-ovarlay');
  const modalCloseBtn = modalElement.querySelector('.modal-close');
  const modalBody = modalElement.querySelector('.modal-body > div:last-child');
  const modalActions = modalElement.querySelector('.modal-actions');

  if (isOpen) {
    modalElement.classList.remove('hidden');
    modalOverlay.addEventListener('click', handleCloseModal);
    modalCloseBtn.addEventListener('click', handleCloseModal);
  } else {
    modalElement.classList.add('hidden');
    modalOverlay.removeEventListener('click', handleCloseModal);
    modalCloseBtn.removeEventListener('click', handleCloseModal);
    modalBody.innerHTML = '';
    modalActions.innerHTML = '';
  }

  return modalElement;
}

export default renderModalElement;
