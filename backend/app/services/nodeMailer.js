const nodemailer = require('nodemailer');

async function forgottenPassword (user_email, password) {

    const adminAccount = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_PASSWORD,
        }
    });

    const mailDescription = {
        from: process.env.ADMIN_EMAIL,
        to: user_email,
        subject: 'Obtenir un mot de passe provisoire',
        text: ` Bonjour !
                Suite à votre demande, vous trouverez ci-joint le mot de passe
                lié à votre compte utilisateur : ${password}

                Cordialement.

                L'équipe Ocrypto
            `
    };

    adminAccount.sendMail(mailDescription);
};

module.exports = forgottenPassword;