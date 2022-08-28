const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fName: "ahmed",
        lName: "zaky",
        email: "ahmed@ahmed.com",
        age: 22,
        password: bcrypt.hashSync("01024756410ahmed", 10),
        addres: "domyate",
        city: "domyate",
        country: "egypt",
        Date_brith: "2000-07-07 17:00:00-07",
        bloodType: "A+",
        isAdmin: true,
        isDoctor: true,
        numberOfPosts: 0,
        mobile: "1024756410",
        active: true,
        image:
          "https://res.cloudinary.com/ahmed-zakys/image/upload/v1661691320/hospitalProject/patients/user1_l8yxeq.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
