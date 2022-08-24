const { check } = require("express-validator");
const db = require("../../../models");
const bcrypt = require("bcrypt");
/*-------------------------- start auth frontEnd validation -------------------------------*/
const signUp_validation = () => {
  return [
    check("fName")
      .notEmpty()
      .withMessage("Enter the first name")
      .isString()
      .withMessage("This field receives text")
      .isLength({ max: 10, min: 2 })
      .withMessage(
        "First name must not exceed 10 characters and must not be less than 2 characters"
      ),
    check("lName")
      .notEmpty()
      .withMessage("Enter the last name")
      .isString()
      .withMessage("This field receives text")
      .isLength({ max: 10, min: 2 })
      .withMessage(
        "The last name must not exceed 10 characters and must not be less than 2 characters"
      ),
    check("email")
      .notEmpty()
      .withMessage("Enter email")
      .isEmail()
      .withMessage("Enter email correct")
      .custom(async (value, { req }) => {
        var doctor = await db.doctors.findOne({
          where: {
            email: value,
          },
        });
        if (req.body.id) {
          if (doctor && doctor.id != req.body.id) {
            throw new Error();
          }
        } else {
          if (doctor) {
            throw new Error();
          }
        }
        return true;
      })
      .withMessage("This email is already registered"),
    check("password")
      .custom(async (value, { req }) => {
        if (!value && !req.body.id) {
          throw new Error();
        }
        return true;
      })
      .withMessage("Enter password")
      .custom(async (value, { req }) => {
        if (req.body.id) return true;
        var count = 0;
        for (var i = 0; i < value.length; i++) {
          if (isNaN(value[i])) {
            count++;
          }
        }
        if (count < 4) {
          throw new Error();
        }
      })
      .withMessage("The password must contain letters"),
    check("confirmPassword")
      .custom(async (value, { req }) => {
        if (value !== req.body.password) {
          throw new Error();
        }
      })
      .withMessage("Password does not match"),
    check("Graduation")
      .custom(async (value, { req }) => {
        if (!req.files.Graduation) {
          throw new Error("");
        }
      })
      .withMessage("you should enter Graduation Image")
      .custom(async (value, { req }) => {
        if (!req.files.Graduation) return true;
        req.files.Graduation.forEach((element) => {
          var arrayExtention = ["jpg", "png", "jpeg", "gif", "svg"];
          var originalname = element.originalname.split(".");
          var imgExtension =
            originalname[originalname.length - 1].toLowerCase();
          if (!arrayExtention.includes(imgExtension)) {
            throw new Error("");
          }
        });
      })
      .withMessage(
        `The image extension must be jpg, jpeg, png, gif, svg , jfif`
      )
      .custom(async (value, { req }) => {
        if (!req.files.Graduation) return true;
        req.files.Graduation.forEach((element) => {
          if (element.size > 20000000) {
            throw new Error("");
          }
        });
      })
      .withMessage("The image must not be more than 200000 kb"),
    check("birthImage")
      .custom(async (value, { req }) => {
        if (!req.files.birthImage) {
          throw new Error("");
        }
      })
      .withMessage("you should enter birthImage")
      .custom(async (value, { req }) => {
        if (!req.files.birthImage) return true;
        req.files.birthImage.forEach((element) => {
          var arrayExtention = ["jpg", "png", "jpeg", "gif", "svg", "jfif"];
          var originalname = element.originalname.split(".");
          var imgExtension =
            originalname[originalname.length - 1].toLowerCase();
          if (!arrayExtention.includes(imgExtension)) {
            throw new Error("");
          }
        });
      })
      .withMessage(
        `The image extension must be jpg, jpeg, png, gif, svg , jfif`
      )
      .custom(async (value, { req }) => {
        if (!req.files.birthImage) return true;
        req.files.birthImage.forEach((element) => {
          if (element.size > 20000000) {
            throw new Error("");
          }
        });
      })
      .withMessage("The image must not be more than 200000 kb"),
  ];
};

/*-------------------------- end auth frontEnd validation -------------------------------*/

/*-------------------------- start sign in -------------------------------*/
const signInValidation = () => {
  return [
    check("email")
      .notEmpty()
      .withMessage("Enter email")
      .isEmail()
      .withMessage("Enter valid Email"),
    check("password").notEmpty().withMessage("Enter Password"),
  ];
};
/*-------------------------- end sign in -------------------------------*/

/*-------------------------- start resetPassword -------------------------------*/
const resetPassword_validation = () => {
  return [
    check("OldPassword")
      .notEmpty()
      .withMessage("You Should Enter OldPassword")
      .custom(async (value, { req }) => {
        console.log(req.body);
        var user = await db.users.findOne({
          where: {
            id: req.body.id,
          },
        });
        var hashPassword = bcrypt.compareSync(value, user.password);
        if (!hashPassword) {
          throw new Error();
        }
        return true;
      })
      .withMessage("Enter OldPassword Correctly"),
    check("password")
      .notEmpty()
      .withMessage("You Should Enter password")
      .custom(async (value, { req }) => {
        var count = 0;
        for (var i = 0; i < value.length; i++) {
          if (isNaN(value[i])) {
            count++;
          }
        }
        if (count < 4) {
          throw new Error();
        }
      })
      .withMessage("The password must contain at lest 4 letters"),
    check("ConfirmPassword")
      .notEmpty()
      .withMessage("You Should Enter ConfirmPassword")
      .custom(async (value, { req }) => {
        if (!req.body.password) return true;
        if (req.body.password != value) {
          throw new Error();
        }
        return true;
      })
      .withMessage("Your Password Not Identical"),
  ];
};
/*-------------------------- end resetPassword -------------------------------*/

/*-------------------------- start resetPassword -------------------------------*/
const DoctorSeting = () => {
  return [
    check("fName")
      .notEmpty()
      .withMessage("Enter the first name")
      .isString()
      .withMessage("This field receives text")
      .isLength({ max: 10, min: 2 })
      .withMessage(
        "First name must not exceed 10 characters and must not be less than 2 characters"
      ),
    check("lName")
      .notEmpty()
      .withMessage("Enter the last name")
      .isString()
      .withMessage("This field receives text")
      .isLength({ max: 10, min: 2 })
      .withMessage(
        "The last name must not exceed 10 characters and must not be less than 2 characters"
      ),
    check("email")
      .notEmpty()
      .withMessage("Enter email")
      .isEmail()
      .withMessage("Enter email correct")
      .custom(async (value, { req }) => {
        var user = await db.doctors.findOne({
          where: {
            email: value,
          },
        });
        if (req.body.id) {
          if (user && user.id != req.body.id) {
            throw new Error();
          }
        } else {
          if (user) {
            throw new Error();
          }
        }
        return true;
      })
      .withMessage("This email is already registered"),
  ];
};
/*-------------------------- end resetPassword -------------------------------*/

module.exports = {
  signUp_validation,
  signInValidation,
  resetPassword_validation,
  DoctorSeting,
};
