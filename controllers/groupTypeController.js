// sp_add_group_type
// sp_delete_group_type_by_id
// sp_edit_group_type_by_id
// sp_get_group_types
// sp_get_group_type_by_id
// sp_get_group_type_by_parent_group_type_id

const mysql = require("../database/db");

class MainController {
  async addGroupType(req, res) {
    console.log("Add Group Type");
    if (
      req.body.group_type != null &&
      req.body.parent_group_type_id != null
    ) {
      let group_type = req.body.group_type;
      let parent_group_type_id = req.body.parent_group_type_id;
      var sql = `call sp_add_group_type('${group_type}', '${parent_group_type_id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Group Type uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n group_type, parent_group_type_id");
      console.log("Por favor llena todos los datos: \n group_type, parent_group_type_id");
    }
  }

  async deleteGroupTypeById(req, res) {
    console.log("Delete Group Type");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_group_type_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Group Type deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editGroupTypeById(req, res) {
    console.log("Edit Group Type");
    if (
      req.params.id != null &&
      req.body.group_type != null &&
      req.body.parent_group_type_id != null
    ) {
      let id = req.params.id;
      let group_type = req.body.group_type;
      let parent_group_type_id = req.body.parent_group_type_id;
      var sql = `call sp_edit_group_type_by_id('${id}','${group_type}', '${parent_group_type_id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Group Type edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, group_type");
      console.log("Por favor llena todos los datos: \n id, group_type");
    }
  }

  async getGroupTypes(req, res) {
    console.log("Get Group Types");
    var sql = `call sp_get_group_types();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Group Types listed successfully");
        res.json({
          group_types: data[0],
        });
      }
    });
  }

  async getGroupTypeById(req, res) {
    console.log("Get Group Type by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_group_type_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Group Type listed successfully");
          res.json({
            group_type: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }


  async getGroupTypesByParentId(req, res) {
    console.log("Get Group Type by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_group_type_by_parent_group_type_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Group Types listed successfully");
          res.json({
            group_types: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const groupTypeController = new MainController();
module.exports = groupTypeController;