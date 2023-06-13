const mysql = require("../database/db");


/*

  {
      "test_id": 1,
      "question": "Escriba una frase:",
      "sub_question": ""
  }

*/

class MainController {
  async addQuestion(req, res) {
    console.log("Add Question");
    if (
      req.body.test_id != null &&
      req.body.question != null
    ) {
      let test_id = req.body.test_id;
      let question = req.body.question;
      let sub_question;
      (req.body.sub_question != null) ? sub_question = `'${req.body.sub_question}'` : sub_question = null;
      var sql = `call sp_add_question('${test_id}', '${question}', ${sub_question});`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Question uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n test_id, question");
      console.log("Por favor llena todos los datos: \n test_id, question");
    }
  }

  async deleteQuestionById(req, res) {
    console.log("Delete Question");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_delete_question_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Question deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async editQuestionById(req, res) {
    console.log("Edit Question");
    if (
      req.params.id != null &&
      req.body.test_id != null &&
      req.body.question != null
    ) {
      let id = req.params.id;
      let test_id = req.body.test_id;
      let question = req.body.question;
      let sub_question;
      (req.body.sub_question != null) ? sub_question = `'${req.body.sub_question}'` : sub_question = null;
      var sql = `call sp_edit_question_by_id('${id}', '${test_id}', '${question}', ${sub_question});`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Question edited successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id, test_id, question");
      console.log("Por favor llena todos los datos: \n id, test_id, question");
    }
  }

  async getQuestions(req, res) {
    console.log("Get Questions");
    var sql = `call sp_get_questions();`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log("Questions listed successfully");
        res.json({
          questions: data[0],
        });
      }
    });
  }

  async getQuestionById(req, res) {
    console.log("Get Question by Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_question_by_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Question listed successfully");
          res.json({
            question: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

  async getQuestionsByTestId(req, res) {
    console.log("Get Questions by Test Id");
    if (req.params.id != null) {
      let id = req.params.id;
      var sql = `call sp_get_questions_by_test_id('${id}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log("Questions listed successfully");
          res.json({
            questions: data[0],
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos: \n id");
      console.log("Por favor llena todos los datos: \n id");
    }
  }

}

const questionController = new MainController();
module.exports = questionController;