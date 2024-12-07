'use strict';
// User.init({
//   id: DataTypes.STRING,
//   email: DataTypes.STRING,
//   firstName: DataTypes.STRING,
//   lastName: DataTypes.STRING,
//   address: DataTypes.STRING,
//   gender: DataTypes.BOOLEAN
// }
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Allcodes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            key: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            valueEn: {
                type: Sequelize.STRING
            },
            valueVi: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Allcodes');
    }
};