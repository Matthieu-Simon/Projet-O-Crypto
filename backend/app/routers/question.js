const express = require('express');

const router = express.Router();

const questionController = require('../controllers/questionController');

/*Route to get one question*/
router.route('/question/:id').get(questionController.getOneQuestion);

module.exports = router;