const nodemailer = require('nodemailer');

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
	host: 'smtp.ukr.net',
	port: 2525,
	secure: true,
	auth: {
		user: UKR_NET_EMAIL,
		pass: UKR_NET_PASSWORD,
	},
});

const sendMail = async data => {
	try {
		const email = { ...data, from: UKR_NET_EMAIL };

		const emailInfo = await transporter.sendMail(email);
		console.log('Email sent successfully:', emailInfo.response);
	} catch (error) {
		console.error('Error sending email:', error.message);
	}
};

module.exports = sendMail;
