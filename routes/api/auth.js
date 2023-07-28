const express = require('express');

const router = express.Router();

const { validateBody } = require('../../middlewares');

const { registerJoiSchema, loginJoiSchema } = require('../../schemas/user');

const ctrl = require('../../controllers/auth');

router.post('/register', validateBody(registerJoiSchema), ctrl.register);

router.post('/login', validateBody(loginJoiSchema), ctrl.login);

module.exports = router;
