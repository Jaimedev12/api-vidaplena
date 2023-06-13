const mysql = require("../database/db");

class MainController {
  async addTestWeight(req, res) {
    console.log("Add Test Weight");
    if (
      req.body.test_id != null &&
        req.body.min_weight != null &&
        req.body.max_weight != null &&
        req.body.description != null &&
        req.body.color != null &&
        req.body.gender_id != null
    ) {

        let test_id = req.body.test_id;
        let min_weight = req.body.min_weight;
        let max_weight = req.body.max_weight;
        let description = req.body.description;
        let color = req.body.color;
        let gender_id = req.body.gender_id;
        let recommendation_id;
        (req.body.recommendation_id != null) ? recommendation_id = `'${req.body.recommendation_id}'` : recommendation_id = null;
        var sql = `call sp_add_test_weight(${test_id}, ${min_weight}, ${max_weight}, '${description}', '${color}', ${gender_id}, ${recommendation_id});`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
            } else {
            console.log(data);
            res.json({
                status: 200,
                message: "Test Weight uploaded successfully",
                affectedRows: data.affectedRows,
            });
            }
        });
    } else {
      res.send("Por favor llena todos los datos: \n test_id, min_weight, max_weight, description, color, gender_id");
      console.log("Por favor llena todos los datos: \n test_id, min_weight, max_weight, description, color, gender_id");
    }
  }

  async deleteTestWeightById(req, res) {
    console.log("Delete Test Weight");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_test_weight_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Test Weight deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editTestWeightById(req, res) {
    console.log("Edit Test Weight");
    if (
        req.params.id != null &&
        req.body.test_id != null &&
        req.body.min_weight != null &&
        req.body.max_weight != null &&
        req.body.description != null &&
        req.body.color != null &&
        req.body.gender_id != null
    ) {
        let id = req.params.id;
        let test_id = req.body.test_id;
        let min_weight = req.body.min_weight;
        let max_weight = req.body.max_weight;
        let description = req.body.description;
        let color = req.body.color;
        let gender_id = req.body.gender_id;
        let recommendation_id;
        (req.body.recommendation_id != null) ? recommendation_id = `'${req.body.recommendation_id}'` : recommendation_id = null;

        var sql = `call sp_edit_test_weight_by_id('${id}', ${test_id}, ${min_weight}, ${max_weight}, '${description}', '${color}', ${gender_id}, ${recommendation_id});`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
            } else {
            console.log(data);
            res.json({
                status: 200,
                message: "Test Weight edited successfully",
                affectedRows: data.affectedRows,
            });
            }
        });
    } else {
      res.send("Por favor llena todos los datos: \n id, test_id, min_weight, max_weight, description, color, gender_id");
      console.log("Por favor llena todos los datos: \n id, test_id, min_weight, max_weight, description, color, gender_id");
    }
  }

  async getTestWeightById(req, res) {
    console.log("Get Test Weight by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_test_weight_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Test Weight listed successfully");
          res.json({
            test_weight: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  

}

const testWeightController = new MainController();
module.exports = testWeightController;