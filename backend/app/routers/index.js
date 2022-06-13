const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const articleRouter = require('./article');
const lexiconRouter = require('./lexicon');

router.use(userRouter);
router.use(articleRouter);
router.use(lexiconRouter);

module.exports = router;
