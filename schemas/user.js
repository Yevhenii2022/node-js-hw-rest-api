const Joi = require('joi');

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const subscriptionList = ['starter', 'pro', 'business'];

const registerJoiSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
});

const loginJoiSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
});

// Mongoose schemas
const schema = {
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		match: emailRegexp,
		required: [true, 'Email is required'],
		unique: true,
	},
	password: {
		type: String,
		minlength: 6,
		required: [true, 'Set password for user'],
	},

	subscription: {
		type: String,
		enum: subscriptionList,
		default: 'starter',
	},
	token: {
		type: String,
		default: '',
	},
};

const settings = {
	versionKey: false,
};

const mongooseUserSchema = [schema, settings];

module.exports = {
	mongooseUserSchema,
	registerJoiSchema,
	loginJoiSchema,
};
