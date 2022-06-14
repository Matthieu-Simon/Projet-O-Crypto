const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const homepageRouter = require('./homepage');
const articleRouter = require('./article');
const lexiconRouter = require('./lexicon');
const levelRouter = require('./level');
const challengeRouter = require('./challenge');

router.use(homepageRouter);
router.use(userRouter);
router.use(articleRouter);
router.use(lexiconRouter);
router.use(levelRouter);
router.use(challengeRouter);

module.exports = router;
