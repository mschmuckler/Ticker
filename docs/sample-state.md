# Sample State

```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "gordonGekko",
        tickers: ["TSLA", "EDIT", "JNJ"],
        avatar_url: "amazon.api/f8ds9few3"
        article_ids: [4, 7, 19, 20]
      }
      4: {
        id: 4,
        username: "axelrod",
        tickers: ["AAPL", "NTLA", "GILD"],
        avatar_url: "amazon.api/gf83j00gr"
        article_ids: [2, 3, 8]
      }
    }

    articles: {
      7: {
        id: 7,
        title: "Greed is Good",
        body: "Buy lorem, sell ipsum.",
        ticker_tag: "AMZN",
        user_id: 1,
      }
      8: {
        id: 8,
        title: "Ripe for a Short Squeeze",
        body: "Even the deepest pockets have holes.",
        ticker_tag: "GOOGL",
        user_id: 4,
      }
    }

    stocks: {
      "MSFT": {
        current: 73.65,
        open: 73.44,
        close: null,
        high: 74.12,
        low: 73.62,
        market_cap: 561000000000,
        pe: 27.19
        div_yield: 2.12
        daily_intervals: [73.44, 73.45, 73.44, 73.44...]
      }
    }
  }

  ui: {
    loading: false
  }

  errors: {
    signup: ["That username is already taken"],
    login: ["Invalid credentials"],
    stock_form: ["That ticker doesn't exist"],
    article_form: ["Title can't be blank"],
    comment_form: ["Body can't be blank"]
  }

  session: {
    id: 1,
    username: "gordonGekko",
    tickers: ["TSLA", "EDIT", "JNJ"],
    avatar_url: "amazon.api/f8ds9few3"
    article_ids: [4, 7, 19, 20]
  }
}
```
