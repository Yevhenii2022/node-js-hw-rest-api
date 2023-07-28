const express = require('express');

const router = express.Router();

const { validateBody, authenticate } = require('../../middlewares');

const { registerJoiSchema, loginJoiSchema } = require('../../schemas/user');

const ctrl = require('../../controllers/auth');

router.post('/register', validateBody(registerJoiSchema), ctrl.register);

router.post('/login', validateBody(loginJoiSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

module.exports = router;
