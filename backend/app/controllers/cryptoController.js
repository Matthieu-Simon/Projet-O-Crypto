const cryptoDataMapper = require('../dataMappers/cryptoDataMapper');

module.exports = {
    async addOneCryptoFavoris(request, response) {
        const newCryptoFavoris = request.params.cryptos;
        const checkUserId = request.params.userId;

        // eslint-disable-next-line max-len
        const cryptoName = await cryptoDataMapper.addOneCryptoFavoris(newCryptoFavoris, checkUserId);

        const CryptoNameForUserId = cryptoName;
        return response.json(CryptoNameForUserId);
    },

};
