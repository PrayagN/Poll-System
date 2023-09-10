CREATE DATABASE pollstation;

CREATE TABLE votes (
    id serial PRIMARY KEY NOT NULL,
    name text NOT NULL,
    voting_choice boolean,
    casted_at timestamp NOT NULL
);
