const { Schema, model } = require('mongoose');

const { mongooseContactsSchema } = require('../schemas/contacts');

const contactSchema = new Schema(...mongooseContactsSchema);

const Contact = model('contact', contactSchema);

module.exports = Contact;
