'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      password: 'hashed_password_here', // Đảm bảo rằng bạn đã mã hóa mật khẩu
      address: '789 Oak St',
      gender: false, // false cho nữ
      phoneNumber: '1234567890',
      roleId: 1, // Nếu có trường roleId
      positionId: 1, // Nếu có trường positionId
      image: 'path/to/image.jpg', // Nếu có trường image
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bob.brown@example.com',
      password: 'hashed_password_here', // Đảm bảo rằng bạn đã mã hóa mật khẩu
      address: '321 Pine St',
      gender: true, // true cho nam
      phoneNumber: '0987654321',
      roleId: 2, // Nếu có trường roleId
      positionId: 2, // Nếu có trường positionId
      image: 'path/to/image.jpg', // Nếu có trường image
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};