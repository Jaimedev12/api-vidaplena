const mysql = require("../database/db");

class MainController {

    async getPamTestResultById(req, res) {
        console.log("Get Pam Test Result By Id");
        if (req.params.id != null) {
            let pam_test_result_id = req.params.id;
            var sql = `call sp_get_pam_test_result_by_id(${pam_test_result_id});`;
            mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data[0]);
                res.json({
                pam_test_result: data[0],
                });
            }
            });
        }

}

async addPamTestResult(req, res) {
    console.log("Add Pam Test Result");
    console.log(req.body);
    if (
        req.body.pam_test_id != null &&
        req.body.test_id != null &&
        req.body.test_result != null
        ){
        let pam_test_id = req.body.pam_test_id;
        let test_id = req.body.test_id;
        let test_result = req.body.test_result;

        var sql = `call sp_add_pam_test_result(${pam_test_id}, ${test_id}, ${test_result});`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Result Added Successfully",
                });
            }
        });

}
}

async editPamTestResultById(req, res) {
    console.log("Edit Pam Test Result By Id");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.pam_test_id != null &&
        req.body.test_id != null &&
        req.body.test_result != null
        ){
        let pam_test_result_id = req.params.id;
        let pam_test_id = req.body.pam_test_id;
        let test_id = req.body.test_id;
        let test_result = req.body.test_result;

        var sql = `call sp_edit_pam_test_result_by_id(${pam_test_result_id}, ${pam_test_id}, ${test_id}, ${test_result});`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Result Edited Successfully",
                });
            }
        });
    }
}
        
async deletePamTestResultById(req, res) {
    console.log("Delete Pam Test Result By Id");
    if (req.params.id != null) {
        let pam_test_result_id = req.params.id;
        var sql = `call sp_delete_pam_test_result_by_id(${pam_test_result_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
            status: 200,
            message: "Pam Test Result Deleted Successfully",
            });
        }
        });
    }

}
}

const pamTestResultController = new MainController();
module.exports = pamTestResultController;