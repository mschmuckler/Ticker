require 'rest-client'
require 'json'

all_users = User.all
tickers = ['AAPL','DIS','GILD','GOOGL','JNJ','MSFT','NFLX','SNAP','TSLA','XOM']
summaries = [
  ["Recent report claims dividend raise in sight", "Research indicates yield signal technique does not mean earnings improvements"],
  ["A U.S. appeals court has voided an order for merger", "In light of antitrust invocation, a surge in sells is imminent", "Beat the crowd by holding onto your liquid"],
  ["New report from eMarketer says their primary demographic is fading", "After punishing long investors, stock has bottomed and is now moving upward with strong momentum"],
  ["The poor performance was partially owed to a sequence of missed ER announcements", "Short interest lost momentum heading into September", "The bears ran out of conviction and chased shares to a valuation that was hardly sustainable, hence the third week rally"],
  ["It is common to pay bonuses to good employees", "It is NOT common to offer an incentive package covering a period that is two-thirds over"],
  ["This article present the long-term improvement in warranty expense as a percentage of its revenue and incorporates the most recent data", "Readers should adopt the metric based approach when deciding on management accounts"],
  ["An early investor in both companies floats the idea", "Substantial dilution and terrible financials would result", "What is there really to gain here?"],
  ["In response to an Credit Suisse outperform rating, this is not your father's market"],
  ["A good option for long-term dividend hunters", "It has given good dividend growth in the last few years and future earnings growth should translate to decent jumps", "Although valuation is a bit high, future dividend grwoth should rapidly outpace the overvaluation"],
  ["Recent price action", "Anecdotal and other sentiment indications", "Price pattern sentiment indications and upcoming expectations"],
  ["Earnings doubled from the previous year at the six month marker", "Cash flow is down at the six month point", "The distribution will not increase until deleveraging is complete"],
  ["The short interest is still considerable as it would take about half month of normal trading to eliminate the short interest. Maybe even longer", "Options signal volatility ahead and probably a good trading opportunity", "Nothing attracts bears like negative cash flow"],
  ["Investors received an early opportunity to profit on takeover speculation", "A strengthened IP position and improved balance sheet leave the company in a better position to negotiate should such an event occur"],
  ["The company has increased dividends for twelve years, and it's quite safe", "Both the stock prices and the P/E are at multi-year lows, half what they were two years ago, while EPS climbs"],
  ["After I published my last article, the company's share price fell in response to second-quarter news", "The price is below what I had hoped to but the risk appears to have increased accordingly", "The metrics look quite appealing"],
  ["At this point, prospects on growth are looking much better", "I began buying aggressively last summer and the value here is just too compellings"],
  ["Share price is bottoming", "Its top-line growth continues to impress", "As the company improves its profitability, its valuation multiples should expand"],
  ["Shifting consumer tastes are weighing on fundamentals", "Also contracting valuation multiples are leading prices lower"],
  ["Growth continues to be strong in newer markets, and showlong-term promise", "Quick action has opened up an opportunity for a quick buy"],
  ["The company has successfully executed its expansion model generating reliable and growing income streams", "The residual income valuation model suggests the company could shoot up soon"],
  ["The market is looking at the company with short-term tailwinds and long-term headwinds", "There are also some long-term tailwinds", "The business isn't great, but its good enough to suggest the stock is materially undervalued at such a P/E ratio"],
  ["The company is aggressively entering high growth regions which should allow it to hedge against any slowdown", "Although valuation is a bit pricey, long-term fundaentals are very strong which should sustain the bull run for the next few quarters"],
  ["After 2 years of underperformance, a return has been indicated"],
  ["Investors are worred that comp growth is slowing down", "But that comp growth is accompanied by an acceleration in earnings growth", "The valuation now under-appreciates the company's robust growth profile"],
  ["Another great quarterly report, yet the market shrugged it off and shares are flat", "With the company's steady yield, it makes an excellent income play", "The market is pricing the book risk far too much, making the stock a compelling value"],
  ["A major piece of news just came out as it relates to future spending at the company and we view this as bullish", "We recently initiated a position and admitted it was a gamble for a mean reversion trade"]
]

titles = [
  "A Screaming Buy After Thursday's Ridiculous Selloff",
  "Almost At The Finish Line",
  "An Undervalued Growth Company",
  "The Coming Black Swans",
  "Ripe for a Short Squeeze",
  "10 Reasons to Buy Now",
  "Achieve a 9% Annual Return",
  "Still More Upside",
  "Dirty but Dirt Cheap",
  "Investment Overview on Yield Announcements",
  "Who Is Winning?",
  "Is This a Stock for You?",
  "Go Big or Go Back to Your ETFs",
  "Why Now is the Right Time to Short",
  "Have Faith... and Sell",
  "Justifiable Risk on Most Recent Earnings Report",
  "Trust Them On Antitrust",
  "Dead Cat Bounce Imminent?",
  "What Is Comfortable Is Rarely Profitable",
  "Beyond Speculation in the Corner Market",
  "Acquisition on the Horizon",
  "Shareholders Will Fail to be Rewarded Here",
  "Hold Despite Looming Threat",
  "Being Ahead of the Pack",
  "Don't Bet Against Secular Trends",
  "Almost at the Finish Line",
  "Income Portfolio Retort: From One Millenial To Another",
  "The Evaluation Process is Leaking Yearly Faults",
  "Steer Clear",
  "Do You Want An 8% Yield Whilst Waiting For An Exit Opportunity?",
  "Finally, All Trading Tactic Roads Led To The Consistently Profitable D-Play",
  "The Small Cap Achievers Delivered Big Time Total Returns",
  "Yet Another Capital Raise on the Horizon",
  "Why A Waterfall Decline Might Be Underway",
  "Market Valuation Can Be Explained, But Is It Right?",
  "Bond Price Indicates More Risk",
  "A Short In Prospect",
  "Going To The Single Digits",
  "Prepping For A Correction",
  "The Big Boys Are Selling",
  "Stubbornly Short After A Strong Quarter",
  "The Insanity Of Debt Raise",
  "Q2 10-Q Tale Of Woe",
  "Revenue Expectations Diminish",
  "Opportunity On The Dip",
  "Bulls Eye Short",
  "A Sudden Drop Flags Trouble",
  "Looking Under The Hood",
  "An Abundance Of Red Flags",
  "The Finish Line Remains A Value Trap",
  "A Short Watch Is On",
  "The Clear Case For Regulatory Action"
]

bodies = [
  "<p>The company's pipeline consists of two research areas, <em>Chimeric Antigen Receptors</em> and T Cell Receptors. Its lead product candidate is <em>CAR-T</em> candidate axicabtagene ciloleucel, which is being evaluated for several kinds of lymphomas in five different studies right now. The therapy is currently under review by the FDA as well as by the European Medicines Agency, and approval is expected later this year (the FDA's action date is November 29). If the drug does indeed get approved, it could turn into a homerun for Kite Pharma and its (soon-to-be) owner Gilead: Peak sales of axicabtagene ciloleucel are expected to hit $7.9 billion in 2022 -- this alone would be equal to almost 30% of Gilead's current annual sales. Axicabtagene ciloleucel, which is estimated to be the most valuable CAR-T candidate right now could replace almost all of Gilead's HCV sales alone, as those are forecasted to hit $9 billion this year.</p>
  <p>One of the <u>primary points</u> of the bull thesis for USAT over the past three to four years has been that the company is at a profitability inflection point, on the cusp of generating significant amounts of free cash flow. The most recent quarter and fiscal year exemplify why this is not the case, and if anything proves the company is back to its old money-losing ways. The biggest drag on profitability in the quarter was that gross margins continued to decline dramatically, taking another step function down to 21.9%.</p>
  <p>Gilead has a lot of cash on its <a href='https://www.google.com/search?q=balance+sheet&oq=balance+sheet&aqs=chrome..69i57j0l5.1664j0j7&sourceid=chrome&ie=UTF-8' >balance sheet</a> and is producing huge cash flows, it is sensible to utilize those cash flows where the company sees value in an acquisition. The takeover of Kite Pharma gives Gilead a strong oncology asset that could, if expectations come true, replace almost all of Gilead's HCV sales alone. On top of that Gilead gets several more pipeline candidates that could become the foundation for Gilead's future in oncology -- establishing a second long term revenue stream in addition to its existing HIV business would position the company well for the future.</p>
  <p>I believe there are likely two reasons for the decline. The first reason is likely due to the company’s lowering of the price of some of its services, as seen in the above VMS advertisement pulled from USAT’s website. I think this is probably due to increased competition in the space. I believe the second possible explanation is that the new units are being installed at less profitable locations, i.e. the market is becoming saturated:
  <ul>
  <li>Solid performance</li>
  <li>Outpaced earnings</li>
  <li>Liquidation in sight</li>
  <li>Massive multi-sector positions</li>
  </ul> <p>It would only make sense that the highest grossing vending machines would get upgraded first; and, now that there are 550,000+ connections it is likely the incremental units are being added at second- and third-tier locations, which inherently generate less revenue per connection. Therefore, we are seeing a clear divergence between net connection growth and total License & Transaction revenue growth. Notice that while net connection growth has been higher year over year in four of the past six quarters, <u>License & Transaction revenue growth</u> has actually been materially lower year over year in each of the past four quarters.</p>
  </p><p>During my discussion with Jerad, he confirmed any new unit that has either Enhanced Autopilot or FSD listed on the window sticker can have those charges removed from the purchase price. Further evidence of the unpopularity of the FSD option can be seen by the fact that only 6 of 367 of the Model X units in U.S. inventory list this option, and only 3 of 227 Model S units list FSD.</p>"

]

tickers.each do |ticker1|
  5.times do
    Article.create!(title: titles.sample, summary: summaries.sample, body: bodies.sample, ticker_tag: ticker1, user_id: all_users.sample.id)
  end
end

# User.destroy_all
# Company.destroy_all
#
# ActiveRecord::Base.connection.tables.each do |t|
#   ActiveRecord::Base.connection.reset_pk_sequence!(t)
# end
#
# companies = RestClient.get('http://www.sharadar.com/meta/tickers.json', headers={})
#
# JSON.parse(companies.body).each do |company|
#   Company.create!(
#     ticker: company['Ticker'],
#     name: company['Name'],
#     exchange: company['Exchange'],
#     industry: company['Industry'],
#     sector: company['Sector']
#   )
# end

# {'Sector': null
#    'CUSIP': '16951E104'
#     'Related Tickers': null
#      'Name': 'CHINA ZENIX AUTO INTERNATIONAL LTD (Foreign)'
#       'Exchange': 'NYSE'
#        'Ticker Change Date': null
#         'Last Updated': '2017-05-01'
#          'Industry': null
#           'Prior Tickers': null
#            'SIC': '3714'
#             'Currency': 'CNY'
#              'First Added': '2016-02-04'
#               'Location': 'CHINA'
#                'Perma Ticker': '165622'
#                 'Fama Industry': 'Automobiles and Trucks'
#                  'Delisted From': null
#                   'Ticker': 'ZX'
#                    'Is Foreign': 'Y'}
