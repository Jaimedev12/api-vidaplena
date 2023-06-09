const express = require('express');
const pamController = require('./controllers/pamController');
const roleController = require('./controllers/roleController');
const personController = require('./controllers/personController');

// ----------------- Controllers -----------------
//const {test} = require('./controllers/testController');

router = express.Router();

// ----------------- Rutas -----------------
router.get('/', (req, res) => {
    res.send("Hello World!");
});
// pam Controller
router.get('/get-pams', pamController.getPams);
router.get('/get-pam/:id', pamController.getPam);
router.post('/add-pam', pamController.addPam);
router.put('/edit-pam/:id', pamController.editPam);
router.delete('/delete-pam/:id', pamController.deletePam);
router.get('/get-pams-by-group/:id', pamController.getPamByGroupId);
router.get('/get-pams-by-doctor/:id', pamController.getPamByDoctorId);

//person Controller
router.get('/get-persons', personController.getPersons);
router.get('/get-person/:id', personController.getPerson);
router.post('/add-person', personController.addPerson);
router.put('/edit-person/:id', personController.editPerson);
router.delete('/delete-person/:id', personController.deletePerson);
router.get('/get-persons-by-role/:id', personController.getPersonsByRole);
router.get('/get-persons-by-gender/:id', personController.getPersonsByGender);
router.get('/get-persons-by-name', personController.getPersonsByName);

// role Controller
router.get('/get-roles', roleController.getRoles);
router.get('/get-role/:id', roleController.getRoleById);
router.post('/add-role', roleController.addRole);
router.put('/edit-role/:id', roleController.editRoleById);
router.delete('/delete-role/:id', roleController.deleteRoleById);


module.exports = router;
