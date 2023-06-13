const mysql = require("../database/db");

class MainController {
  async addRecommendation(req, res) {
    console.log("Add Recommendation");
    if (
      req.body.recommendation != null
    ) {
      let recommendation = req.body.recommendation;
      var sql = `call sp_add_recommendation('${recommendation}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Recommendation uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n recommendation");
      console.log("Por favor llena todos los datos: \n recommendation");
    }
  }

  async deleteRecommendationById(req, res) {
    console.log("Delete Recommendation");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_recommendation_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Recommendation deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editRecommendationById(req, res) {
    console.log("Edit recommendation");
    if (
      req.params.id != null &&
      req.body.recommendation != null
    ) {
      let id = req.params.id;
      let recommendation = req.body.recommendation;
      var sql = `call sp_edit_recommendation_by_id('${id}','${recommendation}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Recommendation edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, recommendation");
      console.log("Por favor llena todos los datos: \n id, recommendation");
    }
  }

  async getRecommendations(req, res) {
    console.log("Get Recommendations");
    var sql = `call sp_get_recommendations();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Recommendations listed successfully");
        res.json({
          recommendations: data[0],
        });
      }
    });
  }

  async getRecommendationById(req, res) {
    console.log("Get Recommendation by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_recommendation_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Recommendation listed successfully");
          res.json({
            recommendation: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async getRecommendationByTestResult(req, res) {
    console.log("Get Recommendation by Test Result");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_recommendation_id_from_pam_test_result_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Recommendation listed successfully");
          res.json({
            recommendation: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}


const recommendationController = new MainController();
module.exports = recommendationController;