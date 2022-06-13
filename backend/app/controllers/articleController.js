const articleDatamapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async getAllArticle(request, response) {
        const getAllArticle = await articleDatamapper.getAllArticle();
        return response.json(getAllArticle);
    },

    async getOneArticle(request, response) {
        const oneArticle = request.body;
        const getOneArticle = await articleDatamapper.getOneArticle(oneArticle);
        return response.json(getOneArticle);
    },

};
