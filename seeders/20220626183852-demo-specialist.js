const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("specialists", [
      {
        name: "armes",
        image: "0.7299399124953929specialities-01.png--",
        description: "this is very good",
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("specialists", null, {});
  },
};
