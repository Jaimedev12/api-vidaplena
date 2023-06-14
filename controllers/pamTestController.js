const mysql = require("../database/db");

class MainController {

    async getPamTestById(req, res) {
        console.log("Get Pam Test By Id");
        if (req.params.id != null) {
            let pam_test_id = req.params.id;
            var sql = `call sp_get_pam_test_by_id(${pam_test_id});`;
            mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data[0]);
                res.json({
                pam_test: data[0],
                });
            }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
          }

}

async getPamTestByPamId(req, res) {
    console.log("Get Pam Test By Pam Id");
    if (req.params.id != null) {
        let pam_id = req.params.id;
        var sql = `call sp_get_pam_test_by_pam_id(${pam_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data[0]);
            res.json({
            pam_tests: data[0],
            });
        }
        });
    } else {
        res.send("Por favor llena todos los datos!");
        console.log("Por favor llena todos los datos!");
        }
    }

async addPamTest(req, res) {
    console.log("Add Pam Test");
    console.log(req.body);
    if (
        req.body.test_id != null &&
        req.body.test_result != null &&
        req.body.pam_id != null &&
        req.body.test_date != null
        ){
        let test_id = req.body.test_id;
        let test_result = req.body.test_result;
        let pam_id = req.body.pam_id;
        let test_date = req.body.test_date;

        var sql = `call sp_add_pam_test(${test_id}, ${test_result}, ${pam_id}, '${test_date}');`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Added Successfully",
                });
            }
        });

} else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
  }

}

async editPamTestById(req, res) {
    console.log("Edit Pam Test By Id");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.test_id != null &&
        req.body.test_result != null &&
        req.body.pam_id != null &&
        req.body.test_date != null
        ){
        let pam_test_id = req.params.id;
        let test_id = req.body.test_id;
        let test_result = req.body.test_result;
        let pam_id = req.body.pam_id;
        let test_date = req.body.test_date;

        var sql = `call sp_edit_pam_test_by_id(${pam_test_id}, ${test_id}, ${test_result}, ${pam_id}, '${test_date}');`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Edited Successfully",
                });
            }
        });
    } else {
        res.send("Por favor llena todos los datos!");
        console.log("Por favor llena todos los datos!");
      }
}
        
async deletePamTestById(req, res) {
    console.log("Delete Pam Test By Id");
    if (req.params.id != null) {
        let pam_test_id = req.params.id;
        var sql = `call sp_delete_pam_test_by_id(${pam_test_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
            status: 200,
            message: "Pam Test Deleted Successfully",
            });
        }
        });
    } else {
        res.send("Por favor llena todos los datos!");
        console.log("Por favor llena todos los datos!");
      }

}
}

const pamTestController = new MainController();
module.exports = pamTestController;