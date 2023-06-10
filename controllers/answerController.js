const mysql =require("../database/db");

class MainController {

    async getAnswerById(req, res) {
        console.log("Get Answer By Id");
        if (req.params.id != null) {
            let answer_id = req.params.id;
            var sql = `call sp_get_answer_by_id(${answer_id});`;
            mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data[0]);
                res.json({
                answer: data[0],
                });
            }
            });
        }

}

async getAnswerByQuestionId(req, res) {
    console.log("Get Answer By Question Id");
    if (req.params.id != null) {
        let question_id = req.params.id;
        var sql = `call sp_get_answers_by_question_id(${question_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data[0]);
            res.json({
            answer: data[0],
            });
        }
        });
    }
}

async addAnswer(req, res) {
    console.log("Add Answer");
    console.log(req.body);
    if (
        req.body.question_id != null &&
        req.body.answer != null &&
        req.body.weight != null
    ){
    let question_id = req.body.question_id;
    let answer = req.body.answer;
    let weight = req.body.weight;
    var sql = `call sp_add_answer(${question_id}, '${answer}', ${weight});`;
    mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
                status: 200,
                message: "Answer Added Successfully",
            });
        }
    });
    }
}

async editAnswerById(req, res) {
    console.log("Edit Answer");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.question_id != null &&
        req.body.answer != null &&
        req.body.weight != null
    ){
    let answer_id = req.params.id;
    let question_id = req.body.question_id;
    let answer = req.body.answer;
    let weight = req.body.weight;
    var sql = `call sp_edit_answer_by_id(${answer_id}, ${question_id}, '${answer}', ${weight});`;
    mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
                status: 200,
                message: "Answer Edited Successfully",
            });
        }
    });
    }
}

async deleteAnswerById(req, res) {
    console.log("Delete Answer");
    if (req.params.id != null) {
        let answer_id = req.params.id;
        var sql = `call sp_delete_answer_by_id(${answer_id});`;
        mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
            console.log(error.message);
        } else {
            console.log(data);
            res.json({
            status: 200,
            message: "Answer Deleted Successfully",
            });
        }
        });
    }

}
}

const answerController = new MainController();
module.exports = answerController;