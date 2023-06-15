const mysql = require("../database/db");

class MainController {
  async getPams(req, res) {
    console.log("Get Pams");
    var sql = `call sp_get_pams()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data[0]);
        res.json({
          pams: data[0],
        });
      }
    });
  }

  async getPam(req, res) {
        console.log("Get Pam");
        console.log(req.params.id);
        if (req.params.id != null) {
          let pam_id = req.params.id;
          var sql = `call sp_get_pam_by_id(${pam_id})`;
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data[0]);
              res.json({
                pam: data[0],
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }

async getPamByPersonId(req, res) {
        console.log("Get Pam by person id");
        if (req.params.id != null) {
          let person_id = req.params.id;
          var sql = `call sp_get_pam_by_person_id(${person_id})`;
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data[0]);
              res.json({
                pam: data[0],
              });
            }
          });
      }
    }


      async addPam(req, res) {
        console.log("Add Pams RTQ");
        console.log(req.body);
        if (
          req.body.person_id != null &&
          req.body.birth_date != null &&
          req.body.guardian_id != null &&
          req.body.doctor_id != null &&
          req.body.belongs_to_archdiocese != null &&
          req.body.pam_group_id != null
        ) {
          let person_id = req.body.person_id;
          let birth_date = req.body.birth_date;
          let deceased_date = req.body.deceased_date;
          let guardian_id = req.body.guardian_id;
          let doctor_id = req.body.doctor_id;
          let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
          let pam_group_id = req.body.pam_group_id;
          if(req.body.deceased_date != null) {
          var sql = `call sp_add_pam(${person_id}, '${birth_date}', '${deceased_date}', ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
          } else {
            var sql = `call sp_add_pam(${person_id}, '${birth_date}', null, ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
          }
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "PAM uploaded successfully",
                affectedRows: data.affectedRows,
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }

      async editPam(req, res) {
        console.log("Edit Pams RTQ");
        console.log(req.body);
        if (
          req.params.id != null &&
          req.body.person_id != null &&
          req.body.birth_date != null &&
          req.body.guardian_id != null &&
          req.body.doctor_id != null &&
          req.body.belongs_to_archdiocese != null &&
          req.body.pam_group_id != null
        ) {
          let pam_id = req.params.id;
          let person_id = req.body.person_id;
          let birth_date = req.body.birth_date;
          let deceased_date = req.body.deceased_date;
          let guardian_id = req.body.guardian_id;
          let doctor_id = req.body.doctor_id;
          let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
          let pam_group_id = req.body.pam_group_id;
          if(req.body.deceased_date != null) {
            var sql = `call sp_edit_pam_by_id(${pam_id}, ${person_id}, '${birth_date}', '${deceased_date}', ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
            } else {
              var sql = `call sp_edit_pam_by_id(${pam_id}, ${person_id}, '${birth_date}', null, ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
            }
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "PAM updated successfully",
                affectedRows: data.affectedRows,
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }

      async deletePam(req, res) {
        console.log("Delete Pam RTQ");
        console.log(req.params.id);
        if (
          req.params.id != null
        ) {
          let pam_id = req.params.id;
          var sql = `call sp_delete_pam_by_id(${pam_id});`;
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "PAM deleted successfully",
                affectedRows: data.affectedRows,
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }

      async getPamByGroupId(req, res) {
        console.log("Get Pam by group id");
        console.log(req.params.id);
        if (req.params.id != null) {
          let group_id = req.params.id;
          var sql = `call sp_get_pams_by_group_id(${group_id})`;
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data[0]);
              res.json({
                pam: data[0],
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }

      async getPamsByDoctorId(req, res) {
        console.log("Get Pam by doctor id");
        console.log(req.params.id);
        if (req.params.id != null) {
          let doctor_id = req.params.id;
          var sql = `call sp_get_pams_by_doctor_id(${doctor_id})`;
          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data[0]);
              res.json({
                pam: data[0],
              });
            }
          });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }
      }


    }



const pamController = new MainController();
module.exports = pamController;