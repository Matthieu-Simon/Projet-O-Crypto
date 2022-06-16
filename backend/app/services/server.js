const express = require('express');
const cors = require('cors');

const session = require('express-session');
const cookieSession = require('cookie-session');

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

   /*Enable handling CORS in server*/
   const corsOptions = {
       origin: 'http://localhost:3001',
       methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
       credentials: true
   }
   app.use(cors(corsOptions));

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
   
   app.use(cookieSession({
    name: 'session',
    keys: ['ocrypto'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))


    app.use(router);
    
    app.listen((PORT),()=>{
        console.log(`http://localhost:${PORT}`)
    });
};

module.exports = {initServer};