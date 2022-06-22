const express = require('express');

const router = express.Router();

const cryptoController = require('../controllers/cryptoController');

/* Route to home page */
// router.route('/favoris/:userId').post(cryptoController.addOneCryptoFavoris);
router.route('/favoris/userId/cryptos').get(cryptoController.getListCryptoFavoris);
router.route('/favoris/:userId/:cryptos').post(cryptoController.addOneCryptoFavoris);
router.route('/deleteFavoris/:userId/:cryptos').post(cryptoController.deleteOneCryptoFavoris);

module.exports = router;
