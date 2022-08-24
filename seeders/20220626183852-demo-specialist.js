const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("specialists", [
      {
        name: "armes",
        image: "0.152561613935393585.png--",
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
