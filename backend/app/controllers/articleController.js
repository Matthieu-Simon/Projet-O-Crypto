const articleDatamapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async getAllArticle(request, response) {
        const getAllArticle = await articleDatamapper.getAllArticle();
        return response.json(getAllArticle);
    },

    async getOneArticle(request, response) {
        const article = request.params.name;
        console.log(`PARAMS NAME :${article}`);
        const getOneArticle = await articleDatamapper.getOneArticle(article);
        return response.json(getOneArticle);
    },

};
