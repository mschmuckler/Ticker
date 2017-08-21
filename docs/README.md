# Ticker

Heroku link

Trello link: https://trello.com/b/qqjKyR9S/ticker

## Minimum Viable Product

Ticker is an investor news web app based on Seeking Alpha, built with Ruby on Rails and React/Redux. This app will satisfy the following minimum criteria:

* Hosting on Heroku
* User account creation/login, with guest login for demo
* Portfolios
* Stock details
* Articles
* Omni-search

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Portfolio (2 days)

**Objective:** Users can add and delete tickers from their portfolios. Input autocompletes based on ticker or company name.


### Phase 3: Stock Details (1 day)

**Objective:** Individual stock page has up-to-date graph and detailed information.

### Phase 4: Articles (2 days)

**Objective:** Articles are tagged with a single ticker. Appear on stock show pages based on `ticker_tag`.

### Phase 5: Search Bar (1 day)

**Objective:** Search bar finds both stocks and articles.

### Phase 6: Portfolio Aside (1 day)

**Objective:** Portfolio aside has add functionality.


### Bonus Features
- [ ] Navbar has an 'Explore' button that goes to random stock page
- [ ] Users have an article feed on portfolio_page based on `tickers`
