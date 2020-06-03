/**
 * Render the contact page
 * @param {Object=} params
 * @param {string} params.id - Contact's id
 */
function createContactPage({ id } = {}) {
  if (!id) window.location.hash = '#/404';

  const fragment = document.createDocumentFragment();
  const p = document.createElement('p');
  p.textContent = `id: ${id}`;
  fragment.appendChild(p);
  return fragment;
}

export default createContactPage;
