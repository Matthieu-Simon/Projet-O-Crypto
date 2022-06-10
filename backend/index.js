const server = require('./app/services/server');
const database = require('./app/services/database');
require('dotenv').config();

/*Run the service database*/
database.lauchDB();

/* Run the service "server"*/
const backServerPort = process.env.PORT || 3000;
const backServerMessage = 'Hello O Crypto'
server.initServer(backServerPort, backServerMessage);

