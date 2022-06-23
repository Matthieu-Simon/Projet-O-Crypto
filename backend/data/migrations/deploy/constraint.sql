-- Deploy ocrypto:constraint to pg

BEGIN;

ALTER TABLE user_email AS text NOT NULL UNIQUE

CHECK(
    value ~ '^[A-Za-z]+[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$' --Check email with regex
);


ALTER TABLE user_pseudo AS text NOT NULL 

CHECK(
    value ~ '^((\w){4,20})$' --Check password with regex
);



COMMIT;
