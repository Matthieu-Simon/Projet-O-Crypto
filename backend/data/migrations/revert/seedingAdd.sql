-- Revert ocrypto:seedingAdd from pg

BEGIN;

TRUNCATE challenge, "level", lexicon, article, "user" RESTART IDENTITY CASCADE;

COMMIT;
