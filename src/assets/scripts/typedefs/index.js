/**
 * @typedef {Object} Contact
 * @property {string=} id - contact's id
 * @property {string} name - contact's name
 * @property {string} phone - contact's phone
 * @property {string} address - contact's address
 */

/**
 * @typedef {Object} ActionPayload
 * @property {!string} type - Action identifier
 * @property {*=} payload - Action payload
 */

/**
 * @typedef {Object} URLParams
 * @property {string=} id - resource's id
 */

/**
 * @typedef {Object} ContactState
 * @property {Contact} [id]
 */

/**
 * @typedef {string} SearchState
 */

/**
 * @typedef {Object} UIState
 * @property {boolean} isModalOpen
 */

/**
 * @typedef {"primary" | "secondary"} ButtonType
 */

/**
 * @typedef {Object} FormParams
 * @property {Contact} contact
 */
