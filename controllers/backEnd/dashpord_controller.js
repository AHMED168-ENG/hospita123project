const { tryError } = require("../../Helper/helper");

/*--------------- start dashpord page ---------------------*/
const dashpord_page_controller = async (req, res, next) => {
  try {
    
    res.render("backEnd/dashpord", {
      title: "dashpord",
      URL: req.url,
      admin: req.cookies.Admin,
      notification: req.flash("notification")[0],
    });
  } catch (error) {
    tryError(res);
  }
};
/*--------------- end dashpord page ---------------------*/

module.exports = {
  dashpord_page_controller,
};
