-- Deploy ocrypto:init to pg

BEGIN;


CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudo text NOT NULL,      
    email text NOT NULL UNIQUE,
    password text NOT NULL,    
    level text NOT NULL DEFAULT 'novice',
    reward int NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "delete_at" TIMESTAMPTZ DEFAULT now()
);


CREATE TABLE article (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    author text NOT NULL DEFAULT 'unknown',
    abstract text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    delete_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE challenges (
    name text NOT NULL UNIQUE,
    level_id integer NOT NULL,
    reward int NOT NULL DEFAULT 0,
    article_id integer NOT NULL,
    abstract text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    delete_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE crypto_currencies (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL UNIQUE,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    delete_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lexicon (
    name text NOT NULL UNIQUE,
    abstract text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "level" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE question (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    answer_id integer NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE answer (
    id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    description text NOT NULL,
    question_id integer NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    delete_at timestamptz
);

CREATE TABLE favoris (
    user_id int NOT NULL,
    crypto_currencies_id int NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    delete_at timestamptz NOT NULL DEFAULT now()    
);

ALTER TABLE answer
    ADD FOREIGN KEY (question_id) REFERENCES question(id);

ALTER TABLE favoris
ADD FOREIGN KEY (crypto_currencies_id) REFERENCES crypto_currencies(id);

ALTER TABLE challenges
ADD FOREIGN KEY (level_id) REFERENCES level(id);

ALTER TABLE challenges
ADD FOREIGN KEY (article_id) REFERENCES article(id);

ALTER TABLE question
ADD FOREIGN KEY (answer_id) REFERENCES answer(id);



COMMIT;
