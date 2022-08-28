const { validationResult } = require("express-validator");
const {
  tryError,
  removeImg,
  Rename_uploade_img,
  handel_validation_errors,
  returnWithMessage,
  formateDate,
} = require("../../Helper/helper");
const db = require("../../models");

/*--------------- start all Labs page ---------------------*/
const LabsController = async (req, res, next) => {
  try {
    allLabs = await db.labs.findAll();
    res.render("backEnd/Labs/allLabs", {
      title: "allLabs",
      notification: req.flash("notification")[0],
      user: req.cookies.User,
      validationError: req.flash("validationError")[0],
      URL: req.url,
      allLabs,
      formateDate: formateDate,
      admin: req.cookies.Admin,
      notification: req.flash("notification")[0],
    });
  } catch (error) {
    tryError(res);
  }
};
/*--------------- end all Labs page ---------------------*/

const activeLabs = async (req, res, next) => {
  try {
    var lab = await db.labs.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["userId", "isActive"],
    });
    await db.labs.update(
      { isActive: req.query.isActive == "1" ? false : true },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    await db.userNotification2.create({
      from: req.cookies.Admin.id,
      text: lab.isActive
        ? "The admin disactivated your lab account"
        : "The admin has activated your lab account",
      userId: lab.userId,
      typeOfNotification: null,
    });
    returnWithMessage(
      req,
      res,
      "/Labs/AllLabs",
      lab.isActive ? "disActivate success" : "activat successful",
      "success"
    );
  } catch (error) {
    tryError(res, error);
  }
};
const allOrdersController = async (req, res, next) => {
  try {
    var allOrders = await db.LabsOrders.findAll({});
    res.render("backEnd/Labs/allOrders", {
      title: "Mack Order",
      validationError: req.flash("validationError")[0],
      notification: req.flash("notification")[0],
      user: req.cookies.User,
      doctor: req.cookies.Doctors,
      allOrders,
      formateDate: formateDate,
      admin: req.cookies.Admin,
      notification: req.flash("notification")[0],
    });
  } catch (error) {
    tryError(res);
  }
};

const deleteLap = async (req, res, next) => {
  try {
    await db.labs.destroy({
      where: {
        id: req.body.id,
      },
    });
    await removeImg(req, "hospitalProject/Labs/");
    returnWithMessage(req, res, "/Labs/AllLabs", "delete success", "danger");
  } catch (error) {
    tryError(res, error);
  }
};

const showOrderDataController = async (req, res, next) => {
  try {
    var order = await db.LabsOrders.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("backEnd/Labs/showOrderData", {
      title: "Mack Order",
      validationError: req.flash("validationError")[0],
      notification: req.flash("notification")[0],
      user: req.cookies.User,
      doctor: req.cookies.Doctors,
      order,
      formateDate: formateDate,
      admin: req.cookies.Admin,
      notification: req.flash("notification")[0],
    });
  } catch (error) {
    tryError(res);
  }
};
module.exports = {
  LabsController,
  showOrderDataController,
  activeLabs,
  allOrdersController,
  deleteLap,
};
