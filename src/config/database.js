require('dotenv').config();

module.exports = {
	dialect: 'mysql',
	host: 'localhost',
	username: 'root',
	password: '99836620',
	database: 'challenge',
	define: {
		timestamps: true,
		underscored: true
	}
}