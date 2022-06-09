const express = require('express');
const logger = require('../helpers/logger');
/**
 * Initialize the web server
 * @param {number} port - http port
 * @param {string} message - set a text to the main route
 */
function initServer (port, message) {
    const PORT = port;
    const app = express();

    app.use(logger);
    app.get('/', (request,response) =>{
        response.send(message);
    });    
    
    app.listen((PORT),()=>{
        console.log(`http://localhost:${PORT}`)
    });
};

module.exports = {initServer};