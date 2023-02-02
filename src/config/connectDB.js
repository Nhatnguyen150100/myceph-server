const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myceph', 'root', 'nhatnguyen150100', {
	host: 'localhost',
	dialect: 'mysql',
	logging: console.log,
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
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
export default connectDB;