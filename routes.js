const express = require('express');
const pamController = require('./controllers/pamController');

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

//person controller
module.exports = router;
