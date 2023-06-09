const express = require('express');
const pamController = require('./controllers/pamController');
const roleController = require('./controllers/roleController');
const genderController = require('./controllers/genderController');

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

module.exports = router;
