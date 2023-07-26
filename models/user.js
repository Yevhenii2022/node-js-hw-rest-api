const { Schema, model } = require('mongoose');

const { handleSaveError } = require('../helpers');

const { mongooseUserSchema } = require('../schemas/user');

const handleUpdateValidate = require('../models/hooks');

const userSchema = new Schema(...mongooseUserSchema);

userSchema.pre('findOneAndUpdate', handleUpdateValidate);

userSchema.post('save', handleSaveError);

userSchema.post('findOneAndUpdate', handleSaveError);

const User = model('user', userSchema);

module.exports = User;
