const express = require('express');

const router = express.Router();

const { validateBody, authenticate, upload } = require('../../middlewares');

const {
	registerJoiSchema,
	loginJoiSchema,
	changeSubscriptionSchema,
	emailJoiSchema,
} = require('../../schemas/user');

const ctrl = require('../../controllers/auth');

router.post('/register', validateBody(registerJoiSchema), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validateBody(emailJoiSchema), ctrl.resendVerifyEmail);

router.post('/login', validateBody(loginJoiSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
	'/users',
	authenticate,
	validateBody(changeSubscriptionSchema),
	ctrl.changeSubscription,
);

router.patch(
	'/users/avatars',
	authenticate,
	upload.single('avatar'), // очікуємо один файл в полі 'avatar'
	ctrl.updateAvatar,
);

module.exports = router;
