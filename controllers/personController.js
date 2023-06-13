const mysql = require("../database/db");

class MainController {
    async getPersons(req, res) {
        console.log("Get Persons");
        var sql = `call sp_get_persons()`;
        mysql.query(sql, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data[0]);
            res.json({
              persons: data[0],
            });
          }
        });
      }

      async getPerson(req, res) {
        console.log("Get Person");
        if(req.params.id != null){
          let person_id = req.params.id;
          var sql = `call sp_get_person_by_id(${person_id})`;
        mysql.query(sql, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data[0]);
            res.json({
              person: data[0],
            });
          }
        
        });
        } else {
          res.send("Por favor llena todos los datos!");
          console.log("Por favor llena todos los datos!");
        }

      }

      async addPerson(req, res) {
        console.log("Add Person");
        console.log(req.body);
        if ( 
          req.body.first_name != null &&
          req.body.last_name != null &&
          req.body.gender_id != null &&
          req.body.role_id != null &&
          req.body.country != null &&
          req.body.state != null &&
          req.body.city != null
          ){
          let first_name = req.body.first_name;
          let last_name = req.body.last_name;
          let gender_id = req.body.gender_id;
          let role_id = req.body.role_id;
          let country = req.body.country;
          let state = req.body.state;
          let city = req.body.city;
          let phone;
          (req.body.phone != null) ? phone = `'${req.body.phone}',` : phone = ` null,`;
          let email;
          (req.body.email != null) ? email = `'${req.body.email}',` : email = ` null,`;
          let address_1;
          (req.body.address_1 != null) ? address_1 = `'${req.body.address_1}',` : address_1 = ` null,`;
          let address_2;
          (req.body.address_2 != null) ? address_2 = `'${req.body.address_2}',` : address_2 = ` null,`;
          let zip_code;
          (req.body.zip_code != null) ? zip_code = `'${req.body.zip_code}'` : zip_code = ` null`;
          
          var sql = `call sp_add_person('${first_name}', '${last_name}', ${gender_id}, ${role_id}, ${phone} ${email} '${country}', '${state}', '${city}', ${address_1} ${address_2} ${zip_code})`;

          mysql.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
              console.log(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "Person uploaded successfully",
                affectedRows: data.affectedRows,
              });
            }
          });
        }
}

async editPerson(req, res) {
  console.log("Edit Person");
  console.log(req.body);
  if ( 
    req.params.id != null &&
    req.body.first_name != null &&
    req.body.last_name != null &&
    req.body.gender_id != null &&
    req.body.role_id != null &&
    req.body.country != null &&
    req.body.state != null &&
    req.body.city != null
    ){
    let person_id = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let gender_id = req.body.gender_id;
    let role_id = req.body.role_id;
    let country = req.body.country;
    let state = req.body.state;
    let city = req.body.city;
    let phone;
          (req.body.phone != null) ? phone = `'${req.body.phone}',` : phone = ` null,`;
          let email;
          (req.body.email != null) ? email = `'${req.body.email}',` : email = ` null,`;
          let address_1;
          (req.body.address_1 != null) ? address_1 = `'${req.body.address_1}',` : address_1 = ` null,`;
          let address_2;
          (req.body.address_2 != null) ? address_2 = `'${req.body.address_2}',` : address_2 = ` null,`;
          let zip_code;
          (req.body.zip_code != null) ? zip_code = `'${req.body.zip_code}'` : zip_code = ` null`;
          
          var sql = `call sp_edit_person_by_id(${person_id}, '${first_name}', '${last_name}', ${gender_id}, ${role_id}, ${phone} ${email} '${country}', '${state}', '${city}', ${address_1} ${address_2} ${zip_code})`;

          mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
      } else {
        console.log(data);
        res.json({
          status: 200,
          message: "Person updated successfully",
          affectedRows: data.affectedRows,
        });
      }
    });
  }
}

async deletePerson(req, res) {
  console.log("Delete Person");
  if(req.params.id != null){
    let person_id = req.params.id;
    var sql = `call sp_delete_person_by_id(${person_id})`;
  mysql.query(sql, (error, data, fields) => {
    if (error) {
      res.status(500);
      res.send(error.message);
    } else {
      console.log(data);
        res.json({
          status: 200,
          message: "Person deleted successfully",
          affectedRows: data.affectedRows,
        });
    }
  
  });
  } else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
  }

}

async getPersonsByGender(req, res) {
  console.log("Get Person by gender");
  if(req.params.id != null){
    let gender_id = req.params.id;
    var sql = `call sp_get_persons_by_gender_id(${gender_id})`;
  mysql.query(sql, (error, data, fields) => {
    if (error) {
      res.status(500);
      res.send(error.message);
    } else {
      console.log(data[0]);
      res.json({
        person: data[0],
      });
    }
  
  });
  } else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
  }

}

async getPersonsByRole(req, res) {
  console.log("Get Person by role");
  if(req.params.id != null){
    let role_id = req.params.id;
    var sql = `call sp_get_persons_by_role_id(${role_id})`;
  mysql.query(sql, (error, data, fields) => {
    if (error) {
      res.status(500);
      res.send(error.message);
    } else {
      console.log(data[0]);
      res.json({
        person: data[0],
      });
    }
  
  });
  } else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
  }

}

async getPersonsByName(req, res) {
  console.log("Get Person by name");
  if(req.body.name != null){
    let name = req.body.name;
    var sql = `call sp_get_persons_by_name_like('${name}')`;
  mysql.query(sql, (error, data, fields) => {
    if (error) {
      res.status(500);
      res.send(error.message);
    } else {
      console.log(data[0]);
      res.json({
        person: data[0],
      });
    }
  
  });
  } else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
  }

}

async getPersonsByEmail(req, res) {
  console.log("Get Person by email");
  console.log(req.body);
  if(req.body.email != null){
    let email = req.body.email;
    var sql = `call sp_get_person_by_email('${email}');`;
  mysql.query(sql, (error, data, fields) => {
    if (error) {
      res.status(500);
      res.send(error.message);
    }else{
      console.log(data[0]);
      res.json({
        person: data[0],
      });
    }
});
  }
  else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
}
}
}

const personController = new MainController();
module.exports = personController;