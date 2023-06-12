const mysql = require("../database/db");

class MainController {
  async addDimension(req, res) {
    console.log("Add Dimension");
    if (
      req.body.dimension != null
    ) {
      let dimension = req.body.dimension;
      var sql = `call sp_add_dimension('${dimension}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Dimension uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n dimension");
      console.log("Por favor llena todos los datos: \n dimension");
    }
  }

  async deleteDimensionById(req, res) {
    console.log("Delete Dimension");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_dimension_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Dimension deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editDimensionById(req, res) {
    console.log("Edit Dimension");
    if (
      req.params.id != null &&
      req.body.dimension != null
    ) {
      let id = req.params.id;
      let dimension = req.body.dimension;
      var sql = `call sp_edit_dimension_by_id('${id}','${dimension}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Dimension edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, dimension");
      console.log("Por favor llena todos los datos: \n id, dimension");
    }
  }

  async getDimensions(req, res) {
    console.log("Get Dimensions");
    var sql = `call sp_get_dimensions();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Dimensions listed successfully");
        res.json({
          dimensions: data[0],
        });
      }
    });
  }

  async getDimensionById(req, res) {
    console.log("Get Dimension by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_dimension_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Dimension listed successfully");
          res.json({
            dimension: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const dimensionController = new MainController();
module.exports = dimensionController;