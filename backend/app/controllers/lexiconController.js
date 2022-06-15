const lexiconDatamapper = require('../dataMappers/lexiconDataMapper');

module.exports = {
    async getAlllexicon(request, response) {
        const getAlllexicon = await lexiconDatamapper.getListwordDefinition();
        return response.json(getAlllexicon);
    },

    async getOneWordOfLexicon(request, response) {
        const word = request.body;
        const getOneLexicon = await lexiconDatamapper.getOneWordDefinition(word);
        return response.json(getOneLexicon);
    },

};
