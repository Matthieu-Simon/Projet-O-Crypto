const client = require('../services/database');

module.exports = {
    async getLevel(level) {
        // get level
        const chooseLevel = await client.query(`SELECT * FROM level where name = ${level.name};`);
        console.log('choose level');
        return chooseLevel.rows;
    },

};
