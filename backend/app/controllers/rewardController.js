const rewardDataMapper = require('../dataMappers/rewardDatamapper');

module.exports = {
    async goodAnwserChecking (request, response) {
        const questionId = request.params.question_id;
        const checking = request.body;       
        const goodAnswerChecking = await rewardDataMapper.goodAnswerChecking(questionId, checking);
        response.json(goodAnswerChecking);
    }
};