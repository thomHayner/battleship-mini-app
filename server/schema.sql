DROP DATABASE "battleshipDb"

CREATE DATABASE "battleshipDb"

-- \c battleship

CREATE TABLE "highScores" (
    "id" SERIAL,
    "playerName" VARCHAR not null,
    "score" INTEGER not null,
);
