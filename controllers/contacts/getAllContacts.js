const Contact = require('../../models/contacts');

const getAllContacts = async (req, res) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 10 } = req.query;
	const skip = (page - 1) * limit; // Обчислення значення пропуску для операції пошуку

	const result = await Contact.find({ owner }, '', { skip, limit }).populate(
		'owner',
		'name email',
	); // Пошук контактів за власником та значенням favorite, з використанням пропуску, ліміту та популювання власника контакту
	res.json(result);
};

module.exports = getAllContacts;
