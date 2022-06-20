const express = require('express');

const router = express.Router();

const answerController = require('../controllers/answerController');

/*Route to cet the good answer  in comparison with questions*/
router.route('/answer/:question_id').get(answerController.getGoodAnswer);

module.exports = router;