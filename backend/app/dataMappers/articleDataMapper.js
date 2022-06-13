const client = require('../services/database');

module.exports = {
    async getAllArticle() {
        // collect all Articles
        const allArticle = await client.query('SELECT * FROM article;');
        console.log('get All Article');
        return allArticle.rows;
    },

    async getOneArticle(article) {
        // collect one article by name
        const oneArticle = await client.query(`SELECT * From where name = ${article.name};`);
        if (oneArticle.rows.length !== 0) {
            return 'Article does not exist';
        }
        return oneArticle.rows[0];
    },

};
