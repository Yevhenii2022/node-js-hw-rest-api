const register = require('./register');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
	register: ctrlWrapper(register),
};
