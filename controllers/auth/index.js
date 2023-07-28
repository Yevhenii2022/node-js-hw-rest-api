const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const changeSubscription = require('./changeSubscription');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	logout: ctrlWrapper(logout),
	getCurrent: ctrlWrapper(getCurrent),
	changeSubscription: ctrlWrapper(changeSubscription),
};
