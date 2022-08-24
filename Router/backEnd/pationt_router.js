const {
  Edit_doctor,
  editDoctor_post,
  activeDoctor,
  showAll_pationt,
  Edit_pationt,
  edit_pationt_post,
  deletePationt,
} = require("../../controllers/backEnd/pationt_controller");
const { uploade_img_multi_fild, uploade_img } = require("../../Helper/helper");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  userAuthonticat,
} = require("../../middel_ware/frontEnd/userAuthonticate");
const {
  DoctorSeting,
} = require("../../validation/frontEnd/doctor/auth_validation");
const {
  signUp_validation,
} = require("../../validation/frontEnd/pationt/auth_validation");

const Router = require("express").Router();

Router.get(
  "/showAll_pationt",
  userAuthonticat,
  isAuthonticate,
  showAll_pationt
);
Router.get("/editPationt/:id", userAuthonticat, isAuthonticate, Edit_pationt);
Router.get("/activePationt/:id", userAuthonticat, isAuthonticate, activeDoctor);
Router.post(
  "/editPationt/:id",
  userAuthonticat,
  isAuthonticate,
  uploade_img("public/backEnd/assets/img/patients", "pationtImage"),
  signUp_validation(),
  edit_pationt_post
);
Router.get(
  "/deletePationt/:id",
  userAuthonticat,
  isAuthonticate,
  deletePationt
);
module.exports = {
  pationt_router: Router,
};
