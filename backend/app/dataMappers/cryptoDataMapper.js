const client = require('../services/database');

module.exports = {
    async addOneCryptoFavoris(newCryptoFavoris, checkUserId) {
        try {
            /* Retrieve the list of user cryptos */
            const listUserCryptos = await client.query(`SELECT cryptoName FROM favoris WHERE "user_id" = ${checkUserId}`);
            console.log(listUserCryptos.rows.length);
            let i;
            const array = [];
            for (i = 0; i < listUserCryptos.rows.length; i++) {
                array.push(listUserCryptos.rows[i].cryptoname);
            }
            /* verification of the presence of the crypto in the list of favorites */
            const checkArray = (array.indexOf(`${newCryptoFavoris}`));

            if (checkArray === -1) {
                /* if the crypto currency does not exist, it is added to the database */
                client.query(`
                INSERT INTO favoris ("user_id", cryptoName)
                VALUES ('${checkUserId}', '${newCryptoFavoris}');`);
                const messageTrue = { message: `La crypto-monnaie ${newCryptoFavoris} a bien été ajouté` };
                return messageTrue;
            }
            /* otherwise we return a msg that it is already in the favorites */
            const messageFalse = { message: `La crypto-monnaie ${newCryptoFavoris} est déjà dans vos favoris` };
            return messageFalse;
        } catch (error) {
            return error;
        }
    },

};
