const express = require('express');

const router = express.Router();

const lexiconController = require('../controllers/lexiconController');

/* Route to get all article */
router.route('/lexicon').get(lexiconController.getAllLexicon);

/* Route to get one article */
router.route('/lexicon/:name').get(lexiconController.getOneWordOfLexicon);

module.exports = router;
