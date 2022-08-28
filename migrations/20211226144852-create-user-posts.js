"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("userPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.STRING,
      },
      commentNumber: {
        type: Sequelize.INTEGER,
      },
      from: {
        type: Sequelize.INTEGER,
      },
      to: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("userPosts");
  },
};
