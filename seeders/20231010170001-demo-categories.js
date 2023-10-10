'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Technology',
        slug: 'technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sports',
        slug: 'sports',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};