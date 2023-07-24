const Joi = require('joi');

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
	favorite: Joi.boolean(),
});

const updateStatus = Joi.object({
	favorite: Joi.boolean().required().messages({
		'any.required': 'missing field "favorite"',
	}),
});

const joiSchema = Joi.object({
	a: Joi.string().min(2).max(10).required().messages({
		'string.base': `"a" should be a type of 'text'`,
		'string.empty': `"a" cannot be an empty field`,
		'string.min': `"a" should have a minimum length of {#limit}`,
		'any.required': `"a" is a required field`,
	}),
});

// Mongoose schemas
const schema = {
	name: {
		type: String,
		required: [true, 'Set "name" for contact'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'Set "email" for contact'],
		unique: true,
	},
	phone: {
		type: String,
		required: [true, 'Set "phone" for contact'],
		unique: true,
	},
	favorite: {
		type: Boolean,
		default: false,
	},
};

const settings = {
	versionKey: false,
};

const mongooseContactsSchema = [schema, settings];

module.exports = {
	addContactSchema,
	joiSchema,
	mongooseContactsSchema,
	updateStatus,
};
