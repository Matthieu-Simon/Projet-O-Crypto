const morgan = require('morgan');


module.exports = morgan(
    `url : :url 
status : :status
method : :method
response : :response-time

`);

