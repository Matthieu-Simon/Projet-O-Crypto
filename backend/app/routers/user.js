const express = require('express');

const router = express.Router();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jwt = require('jsonwebtoken');
require('dotenv').config();

// function authenticateToken(token, userData) {
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

//         return userData;

// }

const userController = require('../controllers/userController');

/* Route to sign in a new user */
router.route('/sign-in').post(userController.insertNewUser);

/* Route to login a user */
router.route('/log-in')
    .post(userController.loginUser)
    .get(userController.loginUser);

/* Route to get profile information from a connected user */
router.route('/profile').get(userController.loginUser);

/* Route to delete or modify a user */
router.route('/profile/update')
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

module.exports = router;
