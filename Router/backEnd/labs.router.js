const {
  LabsController,
  activeLabs,
  deleteLap,
} = require("../../controllers/backEnd/labs.controller");
const { isAuthonticate } = require("../../middel_ware/backEnd/isAuthonticate");
const { userAuthonticat } = require("../../middel_ware/frontEnd/userAuthonticate");
const Router = require("express").Router();
Router.get("/AllLabs", userAuthonticat, isAuthonticate, LabsController);

Router.get("/activeLab/:id", userAuthonticat, isAuthonticate, activeLabs);
Router.post("/deleteLap", userAuthonticat, isAuthonticate, deleteLap);

module.exports = {
  Labs: Router,
};
