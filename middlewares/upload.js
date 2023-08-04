const multer = require('multer');
const path = require('path');

// const destination = path.resolve('temp');  // аналог, бо __dirname немає в ES6
const destination = path.join(__dirname, '../', 'temp');

const storage = multer.diskStorage({
	destination,
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const limits = {
	fileSize: 1024 * 1024 * 10, // обмеження розміру файлу (до 10 мегабайт)
};

const upload = multer({
	storage,
	limits,
});

module.exports = upload;
