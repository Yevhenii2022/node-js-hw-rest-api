const mongoose = require('mongoose');
require('dotenv').config();
require('colors');

const app = require('./app');

const { DB_HOST, PORT } = process.env;

mongoose
	.connect(DB_HOST)
	.then(() => {
		console.log('Database connection successful'.rainbow.italic.bold);
		app.listen(PORT, () => {
			console.log(
				`Server running. Use our API on port: ${PORT}`.underline.green.italic
					.bold,
			);
		});
	})
	.catch(error => {
		console.log(error.message);
		process.exit(1);
	});
