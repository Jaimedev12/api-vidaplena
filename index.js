const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// Express app
const app = express();


// ------------------------ Middleware ------------------------
app.use(express.json()); // Para poder mandar datos al servidor en formato JSON

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Para que cualquier dominio pueda acceder a la api
app.use(cors({
    origin: "*",
}));


// ------------------------ Routes ------------------------
app.use('/', routes);


let port = 3006;

// Listen for requests
app.listen(port, () => {
    console.log('Listening on port', port, '...');
});

//exports.api = functions.https.onRequest(app);