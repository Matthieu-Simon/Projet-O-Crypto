const express = require('express');

const router = express.Router();

const cryptoController = require('../controllers/cryptoController');

/* Route to home page */

router.route('/favoris/:userId/cryptos').get(cryptoController.getListCryptoFavoris);
router.route('/favoris/:userId/:cryptosId').post(cryptoController.addOneCryptoFavoris);
router.route('/deleteFavoris/:userId/:cryptosId').post(cryptoController.deleteOneCryptoFavoris);

module.exports = router;
