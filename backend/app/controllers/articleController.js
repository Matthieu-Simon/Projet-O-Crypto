const articleDatamapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async getAllArticle(request, response) {
        const getAllArticle = await articleDatamapper.getAllArticle();
        return response.json(getAllArticle);
    },

    async getOneArticle(request, response) {
        const article = request.params.name;
        const getOneArticle = await articleDatamapper.getOneArticle(article);
        return response.json(getOneArticle);
    },

};
