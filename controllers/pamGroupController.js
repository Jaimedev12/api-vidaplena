const mysql = require("../database/db");

class MainController {

    async getPamGroups(req, res) {
        console.log("Get Pam Groups");
        var sql = `call sp_get_pam_groups()`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data[0]);
                res.json({
                    pam_groups: data[0],
                });
            }
        });
    }
    
    async getPamGroupById(req, res) {
        console.log("Get Pam Group By Id");
        if (req.params.id != null) {
            let pam_group_id = req.params.id;
            var sql = `call sp_get_pam_group_by_id(${pam_group_id})`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data[0]);
                    res.json({
                        pam_group: data[0],
                    });
                }
            });
        }
    }

    async addPamGroup(req, res) {
        console.log("Add Pam Group");
        console.log(req.body);
        if (
            req.body.group_type_id != null &&
            req.body.group_name != null &&
            req.body.group_parent_id != null
            ){
        let group_type_id= req.body.group_type_id;
        let group_name = req.body.group_name;
        let group_parent_id = req.body.group_parent_id;

        var sql = `call sp_add_pam_group(${group_type_id}, '${group_name}', ${group_parent_id})`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Group uploaded successfully",
                    affectedRows: data.affectedRows,
                });
            }
            });
        }
    }

    async editPamGroupById(req, res) {
        console.log("Edit Pam Group");
        console.log(req.body);
        if (
            req.params.pam_group_id != null &&
            req.body.group_type_id != null &&
            req.body.group_name != null &&
            req.body.group_parent_id != null
            ){
        let pam_group_id = req.params.pam_group_id;
        let group_type_id= req.body.group_type_id;
        let group_name = req.body.group_name;
        let group_parent_id = req.body.group_parent_id;
        var sql = `call sp_edit_pam_group_by_id(${pam_group_id}, ${group_type_id}, '${group_name}', ${group_parent_id})`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Pam Group edited successfully",
                    affectedRows: data.affectedRows,
                });
            }
            });
            }
            
    }

    async deletePamGroupById(req, res) {
        console.log("Delete Pam Group");
        if (req.params.id != null) {
            let pam_group_id = req.params.id;
            var sql = `call sp_delete_pam_group_by_id(${pam_group_id})`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam Group deleted successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
}
}
}
const pamGroupController = new MainController();
module.exports = pamGroupController;