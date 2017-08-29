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
  - Accepts `ticker_tag` query param
- `GET /api/nav/articlesearch`
  - Accepts `searchInput` query param
- `GET /api/articles/:id`
- `POST /api/articles`

### Companies

- `GET /api/companies`
  - Accepts `searchInput` query param
- `GET /api/companies/:ticker`

### Holdings

- `GET /api/holdings`
  - Accepts `user_id` query param
- `POST /api/holdings`
- `DELETE /api/holdings/:id`
