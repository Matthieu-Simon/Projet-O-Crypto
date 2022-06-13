const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const homepageRouter = require('./homepage');
const articleRouter = require('./article');

router.use(homepageRouter);
router.use(userRouter);
router.use(articleRouter);

module.exports = router;
