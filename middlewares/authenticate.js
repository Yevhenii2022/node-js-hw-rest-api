const jwt = require('jsonwebtoken');

const { HttpError, ctrlWrapper } = require('../helpers');

const User = require('../models/user');

const { JWT_SECRET } = process.env;

const authenticate = async (req, __, next) => {
	const { authorization = '' } = req.headers;
	if (!authorization || authorization === '') {
		throw HttpError(401, 'No token provided');
	}

	const [bearer, token] = authorization.split(' ');
	if (bearer !== 'Bearer' || !token) {
		throw HttpError(401, 'Invalid token format');
	}

	try {
		const { id } = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(id);
		if (!user || !user.token || user.token !== token) {
			throw HttpError(401, 'Not authorized');
		}
		req.user = user; // додаємо інформацію про того, хто робить запит, щоб потім в контроллері в req.user була інф про запитувача

		next();
	} catch {
		throw HttpError(401, 'Not authorized');
	}
};

module.exports = ctrlWrapper(authenticate);
