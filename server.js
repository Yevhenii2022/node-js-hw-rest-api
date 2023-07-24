// const app = require('./app');

// GSJ0T11BgPXmZ7w2

// app.listen(3000, () => {
// 	console.log('Server running. Use our API on port: 3000');
// });

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
