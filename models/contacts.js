const { Schema, model } = require('mongoose');

const { handleSaveError } = require('../helpers');

const { mongooseContactsSchema } = require('../schemas/contacts');

const handleUpdateValidate = require('../models/hooks');

const contactSchema = new Schema(...mongooseContactsSchema);

contactSchema.pre('findOneAndUpdate', handleUpdateValidate);

contactSchema.post('save', handleSaveError);

contactSchema.post('findOneAndUpdate', handleSaveError);

const Contact = model('contact', contactSchema);

module.exports = Contact;
