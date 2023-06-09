const express = require('express');
const pamController = require('./controllers/pamController');
const roleController = require('./controllers/roleController');

// ----------------- Controllers -----------------
//const {test} = require('./controllers/testController');

router = express.Router();

// ----------------- Rutas -----------------
router.get('/', (req, res) => {
    res.send("Hello World!");
});
router.get('/pams', pamController.getPams);


router.get('/get-roles', roleController.getRoles);
router.get('/get-role/:id', roleController.getRoleById);
router.post('/add-role', roleController.addRole);
router.put('/edit-role/:id', roleController.editRoleById);
router.delete('/delete-role/:id', roleController.deleteRoleById);


module.exports = router;
