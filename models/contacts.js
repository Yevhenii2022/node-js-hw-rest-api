const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
	try {
		const contacts = await fs.readFile(contactsPath);
		return contacts ? JSON.parse(contacts) : [];
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getContactById(contactId) {
	try {
		const contacts = await listContacts();
		const filteredContact = contacts.find(({ id }) => id === contactId);
		return filteredContact || null;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function removeContact(contactId) {
	try {
		const contacts = await listContacts();
		const index = contacts.findIndex(({ id }) => id === String(contactId));

		if (index === -1) return null;

		const [contact] = contacts.splice(index, 1);
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
		return contact;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function addContact({ name, email, phone }) {
	try {
		const contacts = await listContacts();
		const newContact = {
			id: nanoid(),
			name,
			email,
			phone: String(phone),
		};
		contacts.push(newContact);
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
		return newContact;
	} catch (error) {
		throw new Error(error.message);
	}
}

const updateContact = async (id, body) => {
	try {
		const contacts = await listContacts();
		const index = contacts.findIndex(contact => contact.id === String(id));

		if (index === -1) return null;

		contacts[index] = { id, ...body };
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
		return contacts[index];
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
};
