const client = require('../services/database');

module.exports = {
    async goodAnswerChecking (question_id, checking) {
        console.log(checking)
        const goodAnswerChecking = await client.query(`
            SELECT answer.id, answer.description, answer.question_id
            FROM answer, question
            WHERE question.answer_id = answer.id
            AND question.id = ${question_id};
        `);
        if (checking.id !== goodAnswerChecking.rows[0].id) {
            return 'There is the wrong answer'
        }

        return 'There is the good answer GG';

    }
}