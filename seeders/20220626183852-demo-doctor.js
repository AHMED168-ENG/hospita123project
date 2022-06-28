const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("doctors", [
      {
        fName: "doc4",
      lName: "doc4",
      email: "doc4@doc4.com",
      password: bcrypt.hashSync("01024756410ahmed", 10),
      phone: "1024756410",
      gender: 1,
      aboutMe: null,
      specialist: 1,
      Addres: null,
      city: null,
      userId: 1,
      country: "domyate",
      isFree: true,
      price: 0,
      service: null,
      degree: null,
      collega: null,
      Completion: null,
      hospitalName: null,
      from: null,
      to: null,
      awardes: null,
      doctorImage: null,
      imageGraduate: null,
      birthImage: null,
      isActive: true,
      awardesDate: null,
      userRate: [0],
      rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("doctors", null, {});
  },
};
