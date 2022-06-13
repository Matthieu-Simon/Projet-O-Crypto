const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const homepageRouter = require('./homepage');

router.use(homepageRouter);
router.use(userRouter);

module.exports = router;