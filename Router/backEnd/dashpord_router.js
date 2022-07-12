const {
  dashpord_page_controller,
} = require("../../controllers/backEnd/dashpord_controller");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const {
  userAuthonticat,
} = require("../../middel_ware/frontEnd/userAuthonticate");

const router = require("express").Router();

router.get(
  "/dashpord",
  userAuthonticat,
  isAuthonticate,
  dashpord_page_controller
);

module.exports = {
  dashpord: router,
};
