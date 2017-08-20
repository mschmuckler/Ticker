# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
tickers        | array    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed
ticker_tag | string   | not null

## stocks
column name | data type | details
------------|-----------|-----------------------
ticker   | string   | not null
name     | string    | not null
exchange | string    | not null
