const mysql = require("../database/db");

class MainController {

async getHealthDataByPamId(req, res) {
    console.log("Get Health Data By Pam Id");
    if (req.params.id != null) {
    let pam_id = req.params.id;

    var sql = `call sp_get_health_data_by_pam_id(${pam_id})`;
    mysql.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
        } else {
            console.log(data[0]);
            res.json({
            HealthData: data[0],
            });
        }
        });

} else {
    res.send("Por favor llena todos los datos!");
    console.log("Por favor llena todos los datos!");
}

}

async addHealthData(req, res) {
    console.log("Add Health Data");
    console.log(req.body);
    if (
        req.body.pam_id != null &&
        req.body.weight != null &&
        req.body.height != null &&
        req.body.blood_type != null
        ){
        let pam_id = req.body.pam_id;
        let weight = req.body.weight;
        let height = req.body.height;
        let blood_type = req.body.blood_type;
        
        var sql = `call sp_add_health_data(${pam_id}, ${weight}, ${height}, '${blood_type}')`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data);
                res.json({
                status: 200,
                message: "Health Data uploaded successfully",
                affectedRows: data.affectedRows,
                });
            }
            });

    }
}

async editHealthDataById(req, res) {
    console.log("Edit Health Data");
    console.log(req.body);
    if (
        req.params.id != null &&
        req.body.pam_id != null &&
        req.body.weight != null &&
        req.body.height != null &&
        req.body.blood_type != null
        ){
            let HealthData_id = req.params.id;
            let pam_id = req.body.pam_id;
            let weight = req.body.weight;
            let height = req.body.height;
            let blood_type = req.body.blood_type;

            var sql = `call sp_edit_health_data_by_id(${HealthData_id}, ${pam_id}, ${weight}, ${height}, '${blood_type}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                    status: 200,
                    message: "Health Data edited successfully",
                    affectedRows: data.affectedRows,
                    });
                }
                });
            }
        }

async deleteHealthDataById(req, res) {
    console.log("Delete Health Data");
    if (req.params.id != null) {
        let HealthData_id = req.params.id;
        var sql = `call sp_delete_health_data_by_id(${HealthData_id})`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data);
                res.json({
                status: 200,
                message: "Health Data deleted successfully",
                affectedRows: data.affectedRows,
                });
            }
            });
        }
}

}

const healthDataController = new MainController();
module.exports = healthDataController;