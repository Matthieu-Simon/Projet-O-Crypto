const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/*Route to sign in a new user*/
router.route('/sign-in').post(userController.insertNewUser);

/*Route to login a user*/
router.route('/log-in').post(userController.loginUser);

/*Route to get profile information from a connected user*/
router.route('/profile').get(userController.loginUser);

/*Route to delete or modify a user*/
router.route('/profile/update')
    .delete(userController.deleteUser)
    .patch(userController.updateUser);



module.exports = router;