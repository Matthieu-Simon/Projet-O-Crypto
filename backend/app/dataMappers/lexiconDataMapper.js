const client = require('../services/database');

module.exports = {
    async getListwordDefinition() {
        // get the definition word list
        const listWordDefinition = await client.query('SELECT * FROM lexicon;');
        console.log('get the word list defition');
        return listWordDefinition.rows;
    },
    async getOneWordDefinition(word) {
        // get the definition of one word
        const oneWordDefinition = await client.query(`SELECT * FROM lexicon where name = ${word.name};`);
        return oneWordDefinition.rows;
    },

};
