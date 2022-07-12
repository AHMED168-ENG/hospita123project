const { uploade_img } = require("../../Helper/helper");
const {
  show_specialist_controller,
  deleteSpecialist_controller,
  Add_specialist_post_controller,
  activeSpecialist_controller,
  redirect_withMessage,
  getSpecifieData,
  edit_specialist_controller,
} = require("../../controllers/backEnd/specialities_controller");
const {
  AddSpecialist_validation,
} = require("../../validation/backEnd/specialist_validation");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  userAuthonticat,
} = require("../../middel_ware/frontEnd/userAuthonticate");

const Router = require("express").Router();

Router.get(
  "/AllSpecialities",
  userAuthonticat,
  isAuthonticate,
  show_specialist_controller
);
Router.post(
  "/AddSpecialities",
  userAuthonticat,
  isAuthonticate,

  uploade_img("public/backEnd/assets/img/specialities", "image"),
  AddSpecialist_validation(),
  Add_specialist_post_controller
);
Router.get(
  "/redirect_withMessage",
  isAuthonticate,
  userAuthonticat,
  redirect_withMessage
);
Router.post(
  "/EditSpecialities",
  userAuthonticat,
  isAuthonticate,

  uploade_img("public/backEnd/assets/img/specialities", "image"),
  AddSpecialist_validation(),
  edit_specialist_controller
);
Router.post(
  "/activeSpecialist",
  userAuthonticat,
  isAuthonticate,
  activeSpecialist_controller
);
Router.post(
  "/deleteSpecialist",
  userAuthonticat,
  isAuthonticate,
  deleteSpecialist_controller
);
Router.post(
  "/getSpecifieData",
  userAuthonticat,
  isAuthonticate,
  getSpecifieData
);

module.exports = {
  specialist: Router,
};
