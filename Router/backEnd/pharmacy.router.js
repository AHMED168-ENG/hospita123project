const {
  pharmacyController,
  addPharmacyController,
  addPharmacyControllerPost,
  activePharmacy,
  editPharmasyController,
  editPharmasyControllerPost,
  allOrdersController,
  showOrderDataController,
  deletePharmacy,
} = require("../../controllers/backEnd/pharmacy.controller");

const { uploade_img } = require("../../Helper/helper");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  userAuthonticat,
} = require("../../middel_ware/frontEnd/userAuthonticate");
const {
  AddSpecialist_validation,
} = require("../../validation/backEnd/specialist_validation");
const {
  DoctorSeting,
} = require("../../validation/frontEnd/doctor/auth_validation");
const {
  pharmacy_validate,
} = require("../../validation/frontEnd/pharmacy.validate");

const Router = require("express").Router();
Router.get("/AllPharmacy", userAuthonticat, isAuthonticate, pharmacyController);
Router.get(
  "/AddPharmacy",
  userAuthonticat,
  isAuthonticate,
  addPharmacyController
);
Router.post(
  "/AddPharmacy",
  userAuthonticat,
  isAuthonticate,

  uploade_img("image"),
  pharmacy_validate(),
  addPharmacyControllerPost
);
Router.get("/editPharmasy/:id", isAuthonticate, editPharmasyController);
Router.post(
  "/editPharmasy/:id",
  userAuthonticat,
  isAuthonticate,

  uploade_img("image"),
  pharmacy_validate(),
  editPharmasyControllerPost
);
Router.post("/deletePharmacy", userAuthonticat, isAuthonticate, deletePharmacy);
Router.get(
  "/activePharmacy/:id",
  userAuthonticat,
  isAuthonticate,
  activePharmacy
);
Router.get("/allOrders", userAuthonticat, isAuthonticate, allOrdersController);
Router.get(
  "/showOrderData/:id",
  userAuthonticat,
  isAuthonticate,
  showOrderDataController
);

module.exports = {
  pharmacy: Router,
};
