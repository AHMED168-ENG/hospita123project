const {
  showAll_doctors,
  Edit_doctor,
  editDoctor_post,
  activeDoctor,
} = require("../../controllers/backEnd/doctors_controller");
const {
  deletePationt,
} = require("../../controllers/backEnd/pationt_controller");
const { uploade_img_multi_fild } = require("../../Helper/helper");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  userAuthonticat,
} = require("../../middel_ware/frontEnd/userAuthonticate");
const {
  DoctorSeting,
} = require("../../validation/frontEnd/doctor/auth_validation");

const Router = require("express").Router();

Router.get(
  "/showAll_doctors",
  userAuthonticat,
  isAuthonticate,
  showAll_doctors
);
Router.get("/editDoctor/:id", userAuthonticat, isAuthonticate, Edit_doctor);
Router.get("/activeDoctor/:id", userAuthonticat, isAuthonticate, activeDoctor);

Router.post(
  "/editDoctor/:id",
  userAuthonticat,
  isAuthonticate,
  uploade_img_multi_fild([
    {
      name: "doctorImage",
    },
    {
      name: "clinicImage",
    },
  ]),
  DoctorSeting(),
  editDoctor_post
);
module.exports = {
  doctors_router: Router,
};
