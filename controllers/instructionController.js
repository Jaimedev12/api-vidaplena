const mysql = require("../database/db");

class MainController {
  async addInstruction(req, res) {
    console.log("Add Instruction");
    if (
      req.body.instruction != null && 
      req.body.test_id != null &&
      req.body.test_instructions_order != null
    ) {
      let instructions = req.body.instruction;
      let test_id = req.body.test_id;
      let test_instructions_order = req.body.test_instructions_order;
      var sql = `call sp_add_instruction(${test_id}, ${test_instructions_order}, '${instructions}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Instruction uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n test_id, test_instructions_order, instruction");
      console.log("Por favor llena todos los datos: \n test_id, test_instructions_order, instruction");
    }
  }

  async deleteInstructionById(req, res) {
    console.log("Delete Instruction");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_instruction_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Instruction deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editInstructionById(req, res) {
    console.log("Edit Instruction");
    if (
      req.params.id != null &&
      req.body.instruction != null && 
      req.body.test_id != null &&
      req.body.test_instructions_order != null
    ) {
      let instructions = req.body.instruction;
      let test_id = req.body.test_id;
      let test_instructions_order = req.body.test_instructions_order;
      var sql = `call sp_edit_instruction_by_id(${req.params.id}, ${test_id}, ${test_instructions_order}, '${instructions}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Instruction edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, test_id, test_instructions_order, instruction");
      console.log("Por favor llena todos los datos: \n id, test_id, test_instructions_order, instruction");
    }
  }

  async getInstructions(req, res) {
    console.log("Get Instructions");
    var sql = `call sp_get_instructions();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Instructions listed successfully");
        res.json({
          instructions: data[0],
        });
      }
    });
  }

  async getInstructionById(req, res) {
    console.log("Get Instruction by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_instructions_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Instruction listed successfully");
          res.json({
            instruction: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const instructionController = new MainController();
module.exports = instructionController;