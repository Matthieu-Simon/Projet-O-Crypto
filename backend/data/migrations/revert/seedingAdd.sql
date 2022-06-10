-- Revert ocrypto:seedingAdd from pg

BEGIN;

TRUNCATE "level", lexicon, article, "user" RESTART IDENTITY;

COMMIT;
