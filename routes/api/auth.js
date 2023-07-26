const express = require('express');

const router = express.Router();

const { validateBody } = require('../../middlewares');

const { registerJoiSchema } = require('../../schemas/user');

const ctrl = require('../../controllers/auth');

router.post('/register', validateBody(registerJoiSchema), ctrl.register);

module.exports = router;
