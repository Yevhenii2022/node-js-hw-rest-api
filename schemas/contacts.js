const Joi = require('joi');

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
});

const joiSchema = Joi.object({
	a: Joi.string().min(2).max(10).required().messages({
		'string.base': `"a" should be a type of 'text'`,
		'string.empty': `"a" cannot be an empty field`,
		'string.min': `"a" should have a minimum length of {#limit}`,
		'any.required': `"a" is a required field`,
	}),
});

module.exports = {
	addContactSchema,
	joiSchema,
};
