const {
  signInAdmin,
  signInPage,
  signOutAdmin,
} = require("../../controllers/backEnd/auth/signInUser.controller");
const {
  dashpord_page_controller,
} = require("../../controllers/backend/dashpord_controller");

const {
  isNotAuthonticate,
} = require("../../middel_ware/backEnd/ifNotAuthonticate");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  authAdminValidation,
} = require("../../validation/backEnd/auth.validation");

const router = require("express").Router();

router.get("/signIn", isNotAuthonticate, signInPage);
router.post("/signIn", isNotAuthonticate, authAdminValidation(), signInAdmin);
router.post("/signOutAdmin", isAuthonticate, signOutAdmin);

module.exports = {
  authAdmin: router,
};
