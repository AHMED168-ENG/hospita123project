const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("specialists", [
      {
        name: "armes",
        image:
          "https://res.cloudinary.com/ahmed-zakys/image/upload/v1661690374/hospitalProject/specialty/4_u0x4zp.png",
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
