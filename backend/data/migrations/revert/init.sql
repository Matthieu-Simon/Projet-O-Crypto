-- Revert ocrypto:init from pg

BEGIN;

DROP TABLE favoris, answer, question, level, lexicon, crypto_currencies, challenges, article, user;

COMMIT;
