const express = require('express');
const cors = require('cors');
const session = require('express-session');
const logger = require('../helpers/logger');
const router = require('../routers/index');

/**
 * Initialize the web server
 * @param {number} port - http port
 * @param {string} message - set a text to the main route
 */
function initServer (port, message) {
    const PORT = port;
    const app = express();

    /*Enable custom logger for developper team*/
    app.use(logger);

    /*Enable handling JSON files*/
    app.use(express.json());

    /*Enable handling CORS*/
    app.use(cors());

    /*Enable cookies*/
    app.use(session({
        key:"userId",
        secret: 'ocrypto',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            secure: true,
            expires: 1800000,
        }
    }));    

    app.use(router);
    
    app.listen((PORT),()=>{
        console.log(`http://localhost:${PORT}`)
    });
};

module.exports = {initServer};