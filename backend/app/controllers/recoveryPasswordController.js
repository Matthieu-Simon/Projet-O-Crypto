const recoveryPasswordDataMapper = require('../dataMappers/recoveryPasswordDataMapper');
const randomPassword = require('../services/randomPasswordGenerator');
const nodemailer = require('../services/nodeMailer');

const newRandomPassword = randomPassword.toString();

module.exports = {
    async insertTemporaryPassword (request, response) {
        const userEmail = request.body.email;
        const setTemporaryPassword = await recoveryPasswordDataMapper.recoveryPassword(newRandomPassword, userEmail);

        /*Send an email to the user*/
        nodemailer(userEmail, newRandomPassword);

        return response.json(setTemporaryPassword)
    }
}