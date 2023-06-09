const mysql = require("../database/db");

class MainController {
  async addGender(req, res) {
    console.log("Add Gender");
    if (
      req.body.gender != null
    ) {
      let gender = req.body.gender;
      var sql = `call sp_add_gender('${gender}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Gender uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n gender");
      console.log("Por favor llena todos los datos: \n gender");
    }
  }

  async deleteGenderById(req, res) {
    console.log("Delete Gender");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_gender_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Gender deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editGenderById(req, res) {
    console.log("Edit gender");
    if (
      req.params.id != null &&
      req.body.gender != null
    ) {
      let id = req.params.id;
      let gender = req.body.gender;
      var sql = `call sp_edit_gender_by_id('${id}','${gender}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Gender edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, gender");
      console.log("Por favor llena todos los datos: \n id, gender");
    }
  }

  async getGenders(req, res) {
    console.log("Get Genders");
    var sql = `call sp_get_genders();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Genders listed successfully");
        res.json({
          genders: data[0],
        });
      }
    });
  }

  async getGenderById(req, res) {
    console.log("Get Gender by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_gender_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Gender listed successfully");
          res.json({
            gender: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const genderController = new MainController();
module.exports = genderController;