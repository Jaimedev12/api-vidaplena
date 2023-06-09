const mysql = require("../database/db");

class MainController {
  async getPams(req, res) {
    console.log("Get Pams");
    var sql = `call sp_get_pams()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data[0]);
        res.json({
          pams: data[0],
        });
      }
    });
  }

}

const pamController = new MainController();
module.exports = pamController;