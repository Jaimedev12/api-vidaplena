const mysql = require("../database/db");

class MainController {

    async getTests(req, res) {
        console.log("Get Tests");
        var sql = `call sp_get_tests();`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data[0]);
                res.json({
                    tests: data[0],
                });
            }});
        }

    async getTestById(req, res) {
        console.log("Get Test by id");
        if(req.params.id != null){
            let test_id = req.params.id;
            var sql = `call sp_get_test_by_id(${test_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data[0]);
                    res.json({
                        test: data[0],
                    });
                }});
        }
    }

    async getTestsByDimensionId(req, res) {
        console.log("Get Test by dimension id");
        if(req.params.id != null){
            let dimension_id = req.params.id;
            var sql = `call sp_get_tests_by_dimension_id(${dimension_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data[0]);
                    res.json({
                        tests: data[0],
                    });
                }});
    }
}

async addTest(req, res) {
    console.log("Add Test");
    console.log(req.body);
    if (
        req.body.dimension_id != null &&
        req.body.test_name != null &&
        req.body.self_test != null 
        )
        {
        let dimension_id = req.body.dimension_id;
        let test_name = req.body.test_name;
        let self_test = req.body.self_test;

        var sql = `call sp_add_test(${dimension_id}, '${test_name}', ${self_test});`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                res.json({
                    status: 200,
                    message: "Test Added Successfully",
                });
            }});
        }
    }

    async editTestById(req, res) {
        console.log("Edit Test");
        console.log(req.body);
        if (
            req.params.id != null &&
            req.body.dimension_id != null &&
            req.body.test_name != null &&
            req.body.self_test != null 
            ){
            let test_id = req.params.id;
            let dimension_id = req.body.dimension_id;
            let test_name = req.body.test_name;
            let self_test = req.body.self_test;

            var sql = `call sp_edit_test_by_id(${test_id}, ${dimension_id}, '${test_name}', ${self_test});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    res.json({
                        status: 200,
                        message: "Test Edited Successfully",
                    });
                }});
            }   
        }

        async deleteTestById(req, res) {
            console.log("Delete Test");
            if (req.params.id != null){
                let test_id = req.params.id;
                var sql = `call sp_delete_test_by_id(${test_id});`;
                mysql.query(sql, (error, data, fields) => {
                    if (error) {
                        res.status(500);
                        res.send(error.message);
                    } else {
                        res.json({
                            status: 200,
                            message: "Test Deleted Successfully",
                        });
                    }});
            }
        }

}


const testController = new MainController();
module.exports = testController;