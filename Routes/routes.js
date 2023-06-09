const express = require('express');
const pamController = require('../controllers/pamController');
const roleController = require('../controllers/roleController');
const genderController = require('../controllers/genderController');
const personController = require('../controllers/personController');
const healthDataController = require('../controllers/healthDataController');
const pamGroupController = require('../controllers/pamGroupController');

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
router.get('/get-pams-by-doctor/:id', pamController.getPamsByDoctorId);

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

//gender Controller
router.get('/get-genders', genderController.getGenders);
router.get('/get-gender/:id', genderController.getGenderById);
router.post('/add-gender', genderController.addGender);
router.put('/edit-gender/:id', genderController.editGenderById);
router.delete('/delete-gender/:id', genderController.deleteGenderById);

//Health Data Controller
router.get('/get-health-data-by-pam/:id', healthDataController.getHealthDataByPamId);
router.post('/add-health-data', healthDataController.addHealthData);
router.put('/edit-health-data/:id', healthDataController.editHealthDataById);
router.delete('/delete-health-data/:id', healthDataController.deleteHealthDataById);

//pam group Controller
router.get('/get-pam-groups', pamGroupController.getPamGroups);
router.get('/get-pam-group/:id', pamGroupController.getPamGroupById);
router.post('/add-pam-group', pamGroupController.addPamGroup);
router.put('/edit-pam-group/:id', pamGroupController.editPamGroupById);
router.delete('/delete-pam-group/:id', pamGroupController.deletePamGroupById);

module.exports = router;
