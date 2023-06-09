const mysql = require("../database/db");

class MainController {
  async addRole(req, res) {
    console.log("Add Role");
    if (
      req.body.role != null
    ) {
      let role = req.body.role;
      var sql = `call sp_add_role('${role}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Role uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n role");
      console.log("Por favor llena todos los datos: \n role");
    }
  }

  async deleteRoleById(req, res) {
    console.log("Delete Role");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_role_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Role deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editRoleById(req, res) {
    console.log("Edit Role");
    if (
      req.params.id != null &&
      req.body.role != null
    ) {
      let id = req.params.id;
      let role = req.body.role;
      var sql = `call sp_edit_role_by_id('${id}','${role}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Role edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, role");
      console.log("Por favor llena todos los datos: \n id, role");
    }
  }

  async getRoles(req, res) {
    console.log("Get Roles");
    var sql = `call sp_get_roles();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Roles listed successfully");
        res.json({
          roles: data[0],
        });
      }
    });
  }

  async getRoleById(req, res) {
    console.log("Get Role by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_role_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Role listed successfully");
          res.json({
            role: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const roleController = new MainController();
module.exports = roleController;