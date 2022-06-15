const client = require('../services/database');

module.exports = {
    async getChallenge(challengeName) {
        // Get Challenge by name
        const dataChallenge = await client.query(`SELECT * FROM challenge WHERE name = ${challengeName.name}`);
        console.log('challenge data recovery');
        return dataChallenge;
    },
    async getAllChallenges() {
        // Get all the challenges
        const dataAllChallenges = await client.query('SELECT * FROM challenge;');
        console.log('data recovery of all challenges');
        console.log(dataAllChallenges);
        return dataAllChallenges;
    },

};
