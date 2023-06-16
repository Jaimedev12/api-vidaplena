const mysql = require("../database/db");

class MainController {

    async getPamTestAnswerById(req, res) {
        console.log("Get Pam Test Answer By Id");
        if (req.params.id != null) {
            let pam_test_answer_id = req.params.id;
            var sql = `call sp_get_pam_test_answer_by_id(${pam_test_answer_id});`;
            mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data[0]);
                res.json({
                pam_test_answer: data[0],
                });
            }
            });
        }

}

async getPamTestAnswerByTestId(req, res) {
    console.log("Get Pam Test Answer By Test Id");
    if (req.params.id != null) {
        let test_id = req.params.id;
        var sql = `call sp_get_pam_test_answer_by_test_id(${test_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data[0]);
            res.json({
            pam_test_answer: data[0],
            });
        }
        });
    }
}

async addPamTestAnswer(req, res) {
    console.log("Add Pam Test Answer");
    console.log(req.body);
    if (
        req.body.pam_test_id != null &&
        req.body.answer_id != null
    ){
    let pam_test_id = req.body.pam_test_id;
    let answer_id = req.body.answer_id;
    var sql = `call sp_add_pam_test_answer(${pam_test_id}, ${answer_id});`;
    mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Answer Added Successfully",
            });
        }
    });
}
}

async editPamTestAnswerById(req, res) {
    console.log("Edit Pam Test Answer By Id");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.pam_test_result_id != null &&
        req.body.answer_id != null
    ){
    let pam_test_answer_id = req.params.id;
    let pam_test_result_id = req.body.pam_test_result_id;
    let answer_id = req.body.answer_id;
    var sql = `call sp_edit_pam_test_answer_by_id(${pam_test_answer_id}, ${pam_test_result_id}, ${answer_id});`;
    mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Test Answer Edited Successfully",
            });
        }
    });
    }
}

async deletePamTestAnswerById(req, res) {
    console.log("Delete Pam Test Answer By Id");
    if (req.params.id != null) {
        let pam_test_answer_id = req.params.id;
        var sql = `call sp_delete_pam_test_answer_by_id(${pam_test_answer_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
            status: 200,
            message: "Pam Test Answer Deleted Successfully",
            });
        }
        });
    }

}
}
const pamTestAnswerController = new MainController();
module.exports = pamTestAnswerController;