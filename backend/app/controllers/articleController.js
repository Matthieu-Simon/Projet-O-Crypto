const articleDatamapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async getAllArticle(request, response) {
        const allArticle = request.body;
        const getAllArticle = await articleDatamapper.getAllArticle(allArticle);
        return response.json(getAllArticle);
    },

    async getOneArticle(request, response) {
        const oneArticle = request.body;
        const getOneArticle = await articleDatamapper.getOneArticle(oneArticle);
        return response.json(getOneArticle);
    },

};
