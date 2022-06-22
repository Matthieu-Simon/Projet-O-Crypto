const recoveryPasswordDataMapper = require('../dataMappers/recoveryPasswordDataMapper');
const randomPassword = require('../services/randomPasswordGenerator');
const nodemailer = require('../services/nodeMailer');

const newRandomPassword = randomPassword()

module.exports = {
    async insertTemporaryPassword (request, response) {
        const userEmail = request.body.email;
        const setTemporaryPassword = await recoveryPasswordDataMapper.recoveryPassword(newRandomPassword, userEmail);
        return response.json(setTemporaryPassword)
    }
}