const express = require('express');
const pamController = require('./controllers/pamController');
const personController = require('./controllers/personController');
const roleController = require('./controllers/roleController');
const genderController = require('./controllers/genderController');
const groupTypeController = require('./controllers/groupTypeController')
const dimensionController = require('./controllers/dimensionController');
const instructionController = require('./controllers/instructionController');

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


router.get('/get-genders', genderController.getGenders);
router.get('/get-gender/:id', genderController.getGenderById);
router.post('/add-gender', genderController.addGender);
router.put('/edit-gender/:id', genderController.editGenderById);
router.delete('/delete-gender/:id', genderController.deleteGenderById);


router.get('/get-group-types', groupTypeController.getGroupTypes);
router.get('/get-group-type/:id', groupTypeController.getGroupTypeById);
router.get('/get-group-type-by-parent/:id', groupTypeController.getGroupTypesByParentId);
router.post('/add-group-type', groupTypeController.addGroupType);
router.put('/edit-group-type/:id', groupTypeController.editGroupTypeById);
router.delete('/delete-group-type/:id', groupTypeController.deleteGroupTypeById);


router.get('/get-dimensions', dimensionController.getDimensions);
router.get('/get-dimension/:id', dimensionController.getDimensionById);
router.post('/add-dimension', dimensionController.addDimension);
router.put('/edit-dimension/:id', dimensionController.editDimensionById);
router.delete('/delete-dimension/:id', dimensionController.deleteDimensionById);


router.get('/get-instructions', instructionController.getInstructions);
router.get('/get-instruction/:id', instructionController.getInstructionById);
router.post('/add-instruction', instructionController.addInstruction);
router.put('/edit-instruction/:id', instructionController.editInstructionById);
router.delete('/delete-instruction/:id', instructionController.deleteInstructionById);


module.exports = router;
