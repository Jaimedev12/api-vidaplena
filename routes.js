const express = require('express');
const pamController = require('./controllers/pamController');

// ----------------- Controllers -----------------
//const {test} = require('./controllers/testController');

router = express.Router();

// ----------------- Rutas -----------------
router.get('/', (req, res) => {
    res.send("Hello World!");
});
router.get('/pams', pamController.getPams);

module.exports = router;
