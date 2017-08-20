# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`
  - Accepts stock ticker and add/remove query params, then adds or deletes a ticker from user's `tickers`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Articles

- `GET /api/articles`
  - Accepts either `user_id` or `ticker_tag` query params
- `GET /api/articles/:id`
- `POST /api/articles`

### Stocks

- `GET /api/stocks`
- `GET /api/stocks/:ticker`
