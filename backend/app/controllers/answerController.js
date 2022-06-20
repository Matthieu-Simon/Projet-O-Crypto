const { getGoodAnswer } = require('../dataMappers/answerDataMapper');
const answerDataMapper = require('../dataMappers/answerDataMapper');

module.exports = {
    async getGoodAnswer (request, response) {
        const questionId = request.params.question_id;
        console.log(questionId)
        const getGoodAnswer = await answerDataMapper.getGoodAnswer(questionId);
        response.json(getGoodAnswer);
    }
};