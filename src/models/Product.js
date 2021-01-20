const { Model, DataTypes } = require('sequelize');

class Product extends Model {
	static init(sequelize) {
		super.init({
			image_url: DataTypes.STRING,
			name: DataTypes.STRING,
			value: DataTypes.DOUBLE
		}, {
			sequelize
		})
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
	}
}

module.exports = Product;