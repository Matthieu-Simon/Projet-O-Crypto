const client = require('../services/database');

module.exports = {
    async getGoodAnswer (question_id) {
        try {
            const goodAnswer = await client.query(`
                SELECT answer.description
                FROM answer, question
                WHERE question.id = answer.question_id;
            `);
            
        } 
        catch (error) {
            return error;            
        }

    }
}