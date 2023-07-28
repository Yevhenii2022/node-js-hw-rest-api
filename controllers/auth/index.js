const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	getCurrent: ctrlWrapper(getCurrent),
};
