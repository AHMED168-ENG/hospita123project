const { Op } = require("sequelize");
const { tryError } = require("../../Helper/helper");
const db = require("../../models");

/*--------------- start dashpord page ---------------------*/
const dashpord_page_controller = async (req, res, next) => {
  try {
    let doctors = await db.doctors.findAndCountAll({});
    let pationt = await db.users.findAndCountAll({
      where: {
        isDoctor: {
          [Op.ne]: true,
        },
      },
    });
    let users = await db.users.findAndCountAll({});
    let specialist = await db.specialist.findAndCountAll({});
    let medicin = await db.medicin.findAndCountAll({});
    let labs = await db.labs.findAndCountAll({});
    res.render("backEnd/dashpord", {
      title: "dashpord",
      URL: req.url,
      admin: req.cookies.Admin,
      notification: req.flash("notification")[0],
      doctors: doctors.count,
      specialist: specialist.count,
      pationt: pationt.count,
      users: users.count,
      medicin: medicin.count,
      labs: labs.count,
    });
  } catch (error) {
    tryError(res, error);
  }
};
/*--------------- end dashpord page ---------------------*/

module.exports = {
  dashpord_page_controller,
};
