const getAllContacts = require('./getAllContacts');
const getContactsById = require('./getContactsById');
const addContact = require('./addContact');
const deleteContactById = require('./deleteContactById');
const updateContactById = require('./updateContactById');
const updateContactStatusById = require('./updateContactStatusById');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactsById: ctrlWrapper(getContactsById),
	addContact: ctrlWrapper(addContact),
	deleteContactById: ctrlWrapper(deleteContactById),
	updateContactById: ctrlWrapper(updateContactById),
	updateContactStatusById: ctrlWrapper(updateContactStatusById),
};
