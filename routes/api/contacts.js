const express = require('express');

const ctrl = require('../../controllers/contacts');

const {
	validateBody,
	isValidId,
	validateEmptyBody,
	authenticate,
} = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.getAllContacts);

router.get('/:id', isValidId, ctrl.getContactsById);

router.post(
	'/',
	validateEmptyBody,
	validateBody(schemas.addContactSchema),
	ctrl.addContact,
);

router.delete('/:id', isValidId, ctrl.deleteContactById);

router.put(
	'/:id',
	isValidId,
	validateEmptyBody,
	validateBody(schemas.addContactSchema),
	ctrl.updateContactById,
);

router.patch(
	'/:id/favorite',
	isValidId,
	validateBody(schemas.updateStatus),
	ctrl.updateContactStatusById,
);

module.exports = router;
