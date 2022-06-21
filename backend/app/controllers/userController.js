const userDatamapper = require('../dataMappers/userDataMapper');

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    async insertNewUser(request, response) {
        const newUser = request.body;
        const addUser = await userDatamapper.createUser(newUser);
        return response.json(addUser);
    },

    async loginUser(request, response) {
        const user = request.body;

        /* Create a token at login */
        function generateAccessToken(user) {
            return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
        }

        /* Check the generate token */
        function authenticateToken(token) {
            return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        }

        const userLogin = await userDatamapper.loginUser(user);

        if (userLogin.loggedIn == true) {
            const accessToken = generateAccessToken(user);
            const checkToken = authenticateToken(accessToken);

            return response.send({
                user: userLogin.userData,
                message: userLogin.message,
                accessToken,
                checkToken: {
                    pseudo: checkToken.pseudo, email: checkToken.email, iat: checkToken.iat, exp: checkToken.exp,
                },
            });
        }
        return response.send({ user: userLogin, message: userLogin.message });
    },

    async deleteUser(request, response) {
        const user = request.body;
        const userDeleting = await userDatamapper.deleteUser(user);
        return response.json(userDeleting);
    },

    async updateUser(request, response) {
        const userModification = request.body;
        const userUpdating = await userDatamapper.modifyUser(userModification);
        return response.json(userUpdating);
    },

};
