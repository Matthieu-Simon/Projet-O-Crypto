const randomPassword = require('random-words');

/*Get a random word to set a temporary password */
module.exports = randomPassword({exactly:1, maxLength:10});

