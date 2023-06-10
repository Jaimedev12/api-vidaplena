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
            pam_test: data[0],
            });
        }
        });
    }
    }

    async addPamTest(req, res) {
        console.log("Add Pam Test");
        console.log(req.body);
        if (
            req.body.pam_id != null &&
            req.body.test_date != null &&
            req.body.is_completed != null
        ){
        let pam_id = req.body.pam_id;
        let test_date = req.body.test_date;
        let is_completed = req.body.is_completed;

        var sql = `call sp_add_pam_test(${pam_id}, '${test_date}', ${is_completed});`;
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
    }
    }

    async editPamTestById(req, res) {
    console.log("Edit Pam Test By Id");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.pam_id != null &&
        req.body.test_date != null &&
        req.body.is_completed != null
        ){
        let pam_test_id = req.params.id;
        let pam_id = req.body.pam_id;
        let test_date = req.body.test_date;
        let is_completed = req.body.is_completed;

        var sql = `call sp_edit_pam_test_by_id(${pam_test_id}, ${pam_id}, '${test_date}', ${is_completed});`;
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
    }
}
}
const pamTestController = new MainController();
module.exports = pamTestController;