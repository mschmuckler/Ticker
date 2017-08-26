# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
summary     | text      | array, default: []
body        | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed
ticker_tag | string   | not null

## companies
column name | data type | details
------------|-----------|-----------------------
id          | integer    | not null, primary key
ticker      | string    | not null
name        | string    | not null
exchange    | string    |
industry    | string    |
sector      | string    |

## holdings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
ticker      | string    | not null, foreign key (references companies)
user_id     | integer    | not null, foreign key (references users), indexed
