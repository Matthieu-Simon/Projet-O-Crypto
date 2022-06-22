const client = require('../services/database');

module.exports = {
    async addOneCryptoFavoris(newCryptoFavoris, checkUserId) {
        try {
            /* Retrieve the list of user cryptos */
            const listUserCryptos = await client.query(`SELECT cryptoName FROM favoris WHERE "user_id" = ${checkUserId}`);

            let i;
            const array = [];
            // eslint-disable-next-line no-plusplus
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
    async deleteOneCryptoFavoris(cryptoDelete, checkUserId) {
        try {
            /* Retrieve the list of user cryptos */
            const listUserCryptos = await client.query(`SELECT cryptoName FROM favoris WHERE "user_id" = ${checkUserId}`);

            let i;
            const array = [];
            // eslint-disable-next-line no-plusplus
            for (i = 0; i < listUserCryptos.rows.length; i++) {
                array.push(listUserCryptos.rows[i].cryptoname);
            }
            /* verification of the presence of the crypto in the list of favorites */
            const checkArray = (array.indexOf(`${cryptoDelete}`));

            if (checkArray > -1) {
                /* if the crypto-currency is in the favorites, we delete it */

                client.query(`DELETE FROM favoris WHERE "user_id"='${checkUserId}' AND cryptoname='${cryptoDelete}';`);
                const messageTrue = { message: `La crypto-monnaie ${cryptoDelete} a bien été supprimé` };
                return messageTrue;
            }
            /* otherwise we return a msg that it is not in the favorites */
            const messageFalse = { message: `La crypto-monnaie ${cryptoDelete} n'est pas dans vos favoris` };
            return messageFalse;
        } catch (error) {
            return error;
        }
    },
    async getListCryptoFavoris(checkUserId) {
        try {
            // get the list crypto favoris
            const listUserCryptos = await client.query(`SELECT * FROM favoris WHERE "user_id" = ${checkUserId}`);

            return listUserCryptos.rows[0];
        } catch (error) {
            return error;
        }
    },

};
