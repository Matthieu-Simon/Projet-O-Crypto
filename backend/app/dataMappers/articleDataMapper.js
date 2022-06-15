const client = require('../services/database');

module.exports = {
    async getAllArticle() {
        // collect all Articles
        const allArticle = await client.query('SELECT * FROM article;');

        return allArticle.rows;
    },

    async getOneArticle(article) {
        // collect one article by name
        const oneArticle = await client.query(`SELECT * FROM article WHERE name = '${article}';`);
        /* if the name of the article called corresponds to
        one of the article names of the database then I return the line */

        if (article === oneArticle.rows[0].name) {
            return oneArticle.rows[0];
        }
        // else i send a message
        return 'Article does not exist';
    },

};
