const path = require('path');
const fs = require('fs/promises');
const User = require('../../models/user');
const { resizeImage } = require('../../helpers');

const avatarsDir = path.join(__dirname, '../../public/avatars');

const updateAvatar = async (req, res) => {
	const { _id } = req.user;
	const { path: tempUpload, originalname } = req.file;

	const avatarFilename = `${_id}_${originalname}`;
	const resultUpload = path.join(avatarsDir, avatarFilename);

	await fs.rename(tempUpload, resultUpload);

	await resizeImage(resultUpload, resultUpload);

	const avatarURL = path.join('avatars', avatarFilename);
	await User.findByIdAndUpdate(_id, { avatarURL });

	res.json({ avatarURL });
};

module.exports = updateAvatar;
