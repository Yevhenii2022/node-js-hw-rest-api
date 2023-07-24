// const contacts = require('../models/contacts');
const Contact = require('../models/contacts');

const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (_, res) => {
	const result = await Contact.find();
	res.json(result);
};

const getContactsById = async (req, res) => {
	const { id } = req.params;
	console.log(req.params);
	const result = await Contact.findById(id);
	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.json(result);
};

const addContact = async (req, res) => {
	const result = await Contact.create(req.body);
	console.log(req.body);
	res.status(201).json(result);
};

// const deleteContactById = async (req, res) => {
// 	const { id } = req.params;
// 	const result = await contacts.removeContact(id);
// 	if (!result) {
// 		throw HttpError(404, 'Not found');
// 	}
// 	res.json({
// 		message: 'contact deleted',
// 	});
// };

// const updateContactById = async (req, res) => {
// 	const { id } = req.params;
// 	console.log(id);
// 	const result = await contacts.updateContact(id, req.body);
// 	if (!result) {
// 		throw HttpError(404, 'Not found');
// 	}
// 	res.json(result);
// };

module.exports = {
	getAllContacts: getAllContacts,
	getContactsById: getContactsById,
	addContact: addContact,
	// deleteContactById: ctrlWrapper(deleteContactById),
	// updateContactById: ctrlWrapper(updateContactById),
};
