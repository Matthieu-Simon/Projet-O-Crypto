const questionDataMapper = require('../dataMappers/questionDataMapper');

module.exports = {
    async getOneQuestion(request, response) {
        const questionId = request.params.id;
        const getOneQuestion = await questionDataMapper.getOnequestion(questionId);
        response.json(getOneQuestion);
    }
};