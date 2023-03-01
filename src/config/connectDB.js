import logger from './winston';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myceph', 'root', 'nhatnguyen150100', {
	host: 'localhost',
	dialect: 'mysql',
	logging: (message) => {logger.app.info(message)},
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		logger.app.info('Connection has been established successfully.');
	} catch (error) {
		logger.app.error('Unable to connect to the database:', error);
	}
};
export default connectDB;