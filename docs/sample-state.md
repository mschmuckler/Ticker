# Sample State

```js
{
  entities: {

    articles: {
      7: {
        id: 7,
        title: "Greed is Good",
        summary: ["Jeff is forward looking", "Amazon is expanding at a record rate"],
        body: "Buy lorem, sell ipsum.",
        ticker_tag: "AMZN",
        user_id: 1,
      }
      8: {
        id: 8,
        title: "Ripe for a Short Squeeze",
        summary: ["The data king is faltering", "Anti-SEO techniques are poking serious holes"],
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

  search: {
    
    companies: [
      0: {
        ticker: "XOM",
        name: "Exxon Mobile"
      },
      1: {
        ticker: "EDIT",
        name: "Editas"
      },
      2: {
        ticker: "NTLA",
        name: "Intellia Therapeutics"
      }
    ]

    articleIds: [
      23,
      98,
      124,
      156
    ]

    searchType: "nav"
  }

  errors: {
    auth: ["That username is already taken"],
    addStock: ["No such company exists"],
    addArticle: ["Title can't be blank"]
  }

  session: {
    id: 1,
    username: "gordonGekko",
    holdings: ["TSLA", "EDIT", "JNJ"],
    avatar: "amazon.api/f8ds9few3"
  }
}
```
