const express = require('express');

// ----------------- Controllers -----------------
//const {test} = require('./controllers/testController');

router = express.Router();

// ----------------- Rutas -----------------
router.post('/', (req, res) => {
    res.send("Hello World!");
});

module.exports = router;
