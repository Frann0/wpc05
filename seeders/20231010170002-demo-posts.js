"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query("SELECT id from users;");

    const categories = await queryInterface.sequelize.query(
      "SELECT id from categories;"
    );

    await queryInterface.bulkInsert("posts", [
      {
        title: "How to use Sequelize with MSSQL",
        excerpt:
          "In this tutorial, we will learn how to use Sequelize with MSSQL.",
        content:
          "Sequelize is a powerful ORM that supports multiple databases, including MSSQL. In this tutorial, we will learn how to use Sequelize with MSSQL to build a simple blog application.",
        userId: users[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The latest sports news",
        excerpt:
          "Get the latest sports news and updates from around the world.",
        content:
          "Stay up-to-date with the latest sports news and updates from around the world. From football to basketball to tennis, we have you covered.",
        userId: users[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("PostCategories", [
      {
        postId: 1,
        categoryId: categories[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 1,
        categoryId: categories[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        categoryId: categories[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("PostCategory", null, {});
  },
};
