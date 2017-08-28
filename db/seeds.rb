require 'rest-client'
require 'json'

# all_users = User.all
# tickers = ['AAPL','DIS','GILD','GOOGL','JNJ','MSFT','NFLX','SNAP','TSLA','XOM']
# summaries = [
#   ["Recent report claims dividend raise in sight", "Research indicates yield signal technique does not mean earnings improvements"],
#   ["A U.S. appeals court has voided an order for merger", "In light of antitrust invocation, a surge in sells is imminent", "Beat the crowd by holding onto your liquid"],
#   ["New report from eMarketer says their primary demographic is fading", "After punishing long investors, stock has bottomed and is now moving upward with strong momentum"],
#   ["The poor performance was partially owed to a sequence of missed ER announcements", "Short interest lost momentum heading into September", "The bears ran out of conviction and chased shares to a valuation that was hardly sustainable, hence the third week rally"],
#   ["It is common to pay bonuses to good employees", "It is NOT common to offer an incentive package covering a period that is two-thirds over"],
#   ["This article present the long-term improvement in warranty expense as a percentage of its revenue and incorporates the most recent data", "Readers should adopt the metric based approach when deciding on management accounts"],
#   ["An early investor in both companies floats the idea", "Substantial dilution and terrible financials would result", "What is there really to gain here?"],
#   ["In response to an Credit Suisse outperform rating, this is not your father's market"],
#   ["A good option for long-term dividend hunters", "It has given good dividend growth in the last few years and future earnings growth should translate to decent jumps", "Although valuation is a bit high, future dividend grwoth should rapidly outpace the overvaluation"],
#   ["Recent price action", "Anecdotal and other sentiment indications", "Price pattern sentiment indications and upcoming expectations"],
#   ["Earnings doubled from the previous year at the six month marker", "Cash flow is down at the six month point", "The distribution will not increase until deleveraging is complete"],
#   ["The short interest is still considerable as it would take about half month of normal trading to eliminate the short interest. Maybe even longer", "Options signal volatility ahead and probably a good trading opportunity", "Nothing attracts bears like negative cash flow"],
#   ["Investors received an early opportunity to profit on takeover speculation", "A strengthened IP position and improved balance sheet leave the company in a better position to negotiate should such an event occur"],
#   ["The company has increased dividends for twelve years, and it's quite safe", "Both the stock prices and the P/E are at multi-year lows, half what they were two years ago, while EPS climbs"],
#   ["After I published my last article, the company's share price fell in response to second-quarter news", "The price is below what I had hoped to but the risk appears to have increased accordingly", "The metrics look quite appealing"],
#   ["At this point, prospects on growth are looking much better", "I began buying aggressively last summer and the value here is just too compellings"],
#   ["Share price is bottoming", "Its top-line growth continues to impress", "As the company improves its profitability, its valuation multiples should expand"],
#   ["Shifting consumer tastes are weighing on fundamentals", "Also contracting valuation multiples are leading prices lower"],
#   ["Growth continues to be strong in newer markets, and showlong-term promise", "Quick action has opened up an opportunity for a quick buy"],
#   ["The company has successfully executed its expansion model generating reliable and growing income streams", "The residual income valuation model suggests the company could shoot up soon"],
#   ["The market is looking at the company with short-term tailwinds and long-term headwinds", "There are also some long-term tailwinds", "The business isn't great, but its good enough to suggest the stock is materially undervalued at such a P/E ratio"],
#   ["The company is aggressively entering high growth regions which should allow it to hedge against any slowdown", "Although valuation is a bit pricey, long-term fundaentals are very strong which should sustain the bull run for the next few quarters"],
#   ["After 2 years of underperformance, a return has been indicated"],
#   ["Investors are worred that comp growth is slowing down", "But that comp growth is accompanied by an acceleration in earnings growth", "The valuation now under-appreciates the company's robust growth profile"],
#   ["Another great quarterly report, yet the market shrugged it off and shares are flat", "With the company's steady yield, it makes an excellent income play", "The market is pricing the book risk far too much, making the stock a compelling value"],
#   ["A major piece of news just came out as it relates to future spending at the company and we view this as bullish", "We recently initiated a position and admitted it was a gamble for a mean reversion trade"]
# ]
#
# titles = [
#   "A Screaming Buy After Thursday's Ridiculous Selloff",
#   "Almost At The Finish Line",
#   "An Undervalued Growth Company",
#   "The Coming Black Swans",
#   "Ripe for a Short Squeeze",
#   "10 Reasons to Buy Now",
#   "Achieve a 9% Annual Return",
#   "Still More Upside",
#   "Dirty but Dirt Cheap",
#   "Investment Overview on Yield Announcements",
#   "Who Is Winning?",
#   "Is This a Stock for You?",
#   "Go Big or Go Back to Your ETFs",
#   "Why Now is the Right Time to Short",
#   "Have Faith... and Sell",
#   "Justifiable Risk on Most Recent Earnings Report",
#   "Trust Them On Antitrust",
#   "Dead Cat Bounce Imminent?",
#   "What Is Comfortable Is Rarely Profitable",
#   "Beyond Speculation in the Corner Market",
#   "Acquisition on the Horizon",
#   "Shareholders Will Fail to be Rewarded Here",
#   "Hold Despite Looming Threat",
#   "Being Ahead of the Pack",
#   "Don't Bet Against Secular Trends",
#   "Almost at the Finish Line",
#   "Income Portfolio Retort: From One Millenial To Another",
#   "The Evaluation Process is Leaking Yearly Faults",
#   "Steer Clear",
#   "Do You Want An 8% Yield Whilst Waiting For An Exit Opportunity?",
#   "Finally, All Trading Tactic Roads Led To The Consistently Profitable D-Play",
#   "The Small Cap Achievers Delivered Big Time Total Returns",
#   "Yet Another Capital Raise on the Horizon",
#   "Why A Waterfall Decline Might Be Underway",
#   "Market Valuation Can Be Explained, But Is It Right?",
#   "Bond Price Indicates More Risk",
#   "A Short In Prospect",
#   "Going To The Single Digits",
#   "Prepping For A Correction",
#   "The Big Boys Are Selling",
#   "Stubbornly Short After A Strong Quarter",
#   "The Insanity Of Debt Raise",
#   "Q2 10-Q Tale Of Woe",
#   "Revenue Expectations Diminish",
#   "Opportunity On The Dip",
#   "Bulls Eye Short",
#   "A Sudden Drop Flags Trouble",
#   "Looking Under The Hood",
#   "An Abundance Of Red Flags",
#   "The Finish Line Remains A Value Trap",
#   "A Short Watch Is On",
#   "The Clear Case For Regulatory Action"
# ]
#
# bodies = [
#   "The main bearish thesis, which I listed as something that short sellers might wish to consider (I'm a long-only investor), was that the company was now missing EPS estimates so badly that, in the face of what I expected would actually be good results from conventional retailers, investors might soon be revaluing AMZN to more normal levels, which could lead to much lower stock prices over time. The article mentioned that AMZN's pending acquisition of Whole Foods (WFM) at a 30X or greater P/E put a valuation challenge on AMZN. Doesn't this, and AMZN's expanding chain of bookstores, suggest that e-commerce can only take AMZN 'so far' and no farther? So, why the exalted P/E?
#
# That article was written after AMZN reported its Q2 results.
#
# Now that the retailers that are on a July quarter have weighed in, with enough sales data from Costco (COST), which is on an August quarter to also be able to discuss it, this article makes the case that this new information may show that AMZN stock has more downside risk than upside potential, and that it could be in the process of being valued more normally.
#
# Note, I'm leaving Amazon Web Services (AWS) out of the discussion for now. Value it how you will. I'll comment on why I cannot value it later in the article. Investors who are bullish enough to own AMZN because of AWS are of course entitled to do that, but for me, that's a 'tail wags dog' story.
#
# Within retail aside from AMZN, there is a huge bifurcation. Some chains have failed, meaning they are restructuring debt and closing a number of stores. Other chains such as Macy's (M) are profitable but also closing stores and in general struggling to find their way in an omni-channel world of retailing.
#
# However, the evolving data show that the strong retailers are, if anything, outperforming AMZN from either a P&L standpoint and or in e-commerce growth and innovation, and that AMZN may therefore be in the process of going from hunter to hunted.
#
# I'll discuss several names to show how they are making their way forward in the current retail landscape.",
#
# "In the past it has also denied links between its talc-based products like Johnson's Baby Power and Shower to Shower body powder. Research pursuant to a correlation between talc and ovarian cancer is mixed. Talc is composed of magnesium silicate; in the past it has been used for industrial purposes, talc mining, and for cosmetic and hygienic purposes. In its natural state some talc can contain asbestos, but talc-based products used within the home over the past few decades have supposedly been asbestos-free. Concerns over a correlation between talcum powder and cancer have been particularly focused on whether breathing in natural talc fibers at work could expose workers to risk of lung cancer, and whether women who apply talcum powder to the genital areas are exposed to a higher risk of ovarian cancer.
#
# According to IFLScience the European Talc Association felt that US case-control studies suggested only slight differences in risk of ovarian cancer for those who used talc between the legs and those who did not. However, a 2013 analysis from Harvard University did suggest such a link:
#
# But more recent scientific studies continue to confirm a trend that links talc use and epithelial ovarian cancer (the most common type of ovarian cancer). A 2013 analysis led by Harvard University of 8,525 ovarian cancer cases and 9,859 controls concluded that genital talc powder use is associated with a small-to-moderate increase in risk of various sub-types of ovarian cancer. It found that “genital powder use was associated with a similar increased risk of borderline and invasive ovarian cancer overall”. They also noted that, as there are few ovarian cancer risks women can avoid, “avoidance of genital powders may be a possible strategy to reduce ovarian cancer incidence”.
# Given [i] that talc in its natural state can contain traces of asbestos and [ii] the findings from the Harvard study, it could potentially be damning for J&J. The largest award was $417 million and the smallest was $55 million; the lion's share of the awards comprise punitive damages. The mid-point was $72 million in total. If J&J lost only 10% of its outstanding cases (480) and paid the mid-point of $72 million it could potentially cost the company about $34 billion. Given the size of the punitive damages in prior cases J&J's potential liabilities could be staggering.
#
# At quarter-ended July 2, 2017 J&J had cash of about $13 billion. It also generate $8.8 billion of cash flow from operations through the first six months of the fiscal year. Annual run-rate cash flow would be around $17 billion. To cover $34 billion in new liabilities would take [i] existing cash plus [ii] another six quarters of operating cash flow.
#
# I understand that only a few talc-related lawsuits pursuit to J&J have come to trial, and the company have lost the majority of them. The $417 million verdict was jaw-dropping. J&J's total potential exposure to talc-based claims is even more staggering.",
#
# "The company took another step towards consolidating its position in the HIV market as it secured priority review from the FDA for bictegravir (50mg) (BIC), an investigational, fixed-dose combination with emtricitabine/tenofovir alafenamide (200/25mg) (FTC/TAF). The company now looks forward to receiving the FDA decision in February next year. The company is seeking a similar approval for the European Union market as well. The combination is currently being vetted by the European Medicines Agency.
#
# The upcoming PDUFA in early next year is important for Gilead on many accounts. Normally, a single PDUFA doesn't move the stock of a large company like Gilead. However, the company has been struggling for quite a while now, mainly on account of its lagging HCV performance. The stock is so depressed right now that the mere hope that this new breakthrough may help Gilead in diversifying its product revenue stream will quite possibly give it momentum. Investors must never forget, like we discussed in an earlier article, that Gilead is still one of the most undervalued healthcare stocks out there.
#
# Gilead's Genvoya reported $857 million in sales for the second quarter of the year, up from $302 million it had reported for the corresponding quarter of the previous year - almost a threefold increase QoQ. Currently, Genvoya is one of the most prescribed regimens for treatment naïve HIV patients. Bictegravir's approval will add a new dimension to the company's HIV portfolio as it showed 0% resistant development in all the four studies for Phase III. One of the biggest challenges faced by HIV therapies is that patients tend to develop resistance to the treatment, rendering them useless. Gilead's upcoming drug takes care of this drawback shown by current therapies.
#
# At the same time, the company's HCV business seems to be getting back on track. While it is unlikely to regain the growth rate shown in the past while it was a 'young' drug, it can still age well, keep up a solid if not accelerating growth, and generally bolster the stock. The company revised its full year HCV product sales forecast from $7.5 billion- $9 billion range to $8.5 billion- $9.5 billion. Further, the company is also doing well on generating synergies between HCV and HIV. It recently received the FDA approval for expanding the label for its Epclusa product for treating chronic hepatitis C in patients co-infected with HIV. The company's recent Q2 results also looked promising as Gilead showed the signs of its revenue stabilizing. Its quarterly revenue stood at $7 billion, in comparison to $7.7 billion for the corresponding quarter of the previous year while its net income was reported at $3.1 billion. Another promising sign was the company's robust liquidity position as it ended the quarter with $36.6 billion in cash, cash equivalents and marketable securities, which was $34 billion as of March 31, 2017. When so many companies are losing cash, Gilead managed to add almost $3 billion to its coffers without dilution or debt - not a small feat for a company so hated by investors these days.
#
# The major risk Gilead faces is the price pressure on its products. For its HCV segment, the problem is especially pronounced as its rival AbbVie (ABBV) announced the pricing of its newly approved hepatitis C drug Mavyret. The drug hits the market with a $13,200 price tag for a month long therapy. Gilead, though, charges $31,500 per month for its Harvoni treatment. There's been wide coverage comparing the two drugs, and frankly, I don't see how Gilead can sustain that price point, except that list price and after-discount price differs widely, and probably isn't too far different for the two rival drugs. Otherwise, Mavyret has a comparable cure rate and shorter regimen (8 weeks vs. 12 weeks) than Harvoni. It also works for genotypes 2 and 3 where Harvoni isn't recommended treatment. According to Bloomberg Intelligence analyst Asthika Goonewardene, consensus sales for Gilead's HCV medicines may be more than $1 billion too high for 2018. While I don't expect the situation to be unsalvageable, Gilead will face some problems with Mavyret for its HCV portfolio, which accounts for 40% of its revenue. What it needs to do is further diversify its portfolio, so as to reduce its reliance on the HCV market. As my colleague Dr. Maiya said in another Article, we have been clamoring for such a sea change for a long time.
#
# Gilead stock is currently in a recovery mode and has gained over 10 percent in the past 3 months. With its recent announcements regarding an upcoming project as well as improvements in the HCV market, the company will likely see its stock price retain the positive momentum - to an extent. At the current price level, the stock is at an attractive point for medium to long term investors, or those like us who want to double down. While its upcoming PDUFA date in February next year is an immediate catalyst, Gilead is still a good bet for long term investing with its solid fundamentals.",
#
# "All of the above is prologue to my purpose today, which is to examine what type of business performance the market must be pricing in for shares of Chipotle to trade at $310/share with a market cap of $8.84 billion.
#
# I am going to presume the market, in its all-efficient CAPM wisdom (can you hear the sarcasm?), has run a discounted cash flow analysis and plugged in a beta of 0.62 for Chipotle (Beta sourced from Google Finance, although since this is a massively important part of the logic, I found sources reporting Beta for CMG from .11 to 1.02). The 20-year U.S. Treasury rate stands at 2.5% according to Treasury.gov, and given a Shiller CAPE currently standing at 30, I’m going to say the market is assigning a 5% equity risk premium. Doing the math, we get a risk adjusted return for Chipotle of 5.6% (That is 2.5%+0.62*5%).
#
# So, the efficient market theory says we should demand a 5.6% return from Chipotle, which means that in December 2021, the efficient market theorists believe CMG will be trading at $393/share. So, I’ve tried to back into a set of assumptions for Chipotle’s 2021 performance that would justify a $393/share price.
#
# Monkeying around in Excel
#
# What I found helped me to understand the precipitous drop in the share price. The market has not changed its expectations of profitability by degree; rather, the market has bifurcated into two camps. A large and growing contingent of investors have concluded that CMG’s future sales growth will not keep up with expense inflation and thus its cash flow has entered a long-term secular decline. The implication of this is that the company should immediately cease opening new stores and it should be valued as a declining series of cash flows.
#
# Countering this belief, a minority group believes the company’s cash flows will continue to grow, and therefore sees Chipotle’s stock as an unbelievable bargain.
#
# To illustrate this, I will present a table below with three scenarios: Bull, Bear, and Compromise. What I am arguing is that the Compromise case seems illogical, and so the current stock price represents a weighted average probability of the Bull and Bear cases that each would result in impressive returns if an individual investor can correctly figure out the future and invest accordingly. The Bull case corresponds to my initial write-up while the Bear and Compromise cases are summarized and discussed below. If you are interested in further discussion of the various assumptions, you can follow along with the original article to see my commentary.",
#
#   "The big fundamental news moving Disney stock occurred on August 8 when the nation's second largest media company announced it was cutting the cord with Netflix, to which Disney had been supplying content. The media firm with the largest proprietary content library also said it was creating its own streaming service, going 'over the top' and direct to consumers.
#
# Major corporate moves such as cutting ties with a revenue relationship typically often occur after intense and elongated deliberation and sometimes negotiation. Just like a corporate takeover, the concept is typically analyzed in a small group that keeps the topic a highly guarded secret. But as the announcement date grows closer, a wider corporate group is made aware of the plans for their input. In the case of a meaningful relationship with a distribution partner, as was the case between Disney and Netflix, it is not uncommon to inform the party being excommunicated from the relationship before a public announcement is made. While the behind the scenes details of the Disney / Netflix separation are not public, one day preceding the Disney announcement Netflix announced the acquisition of comic book publisher Milarworld in what was reported as a deal to improve their content library. Such a content addition could be viewed as negating the potential loss of Disney content, which occurred the following day.
#
# While all these fundamental moves were fully visible to the investing public August 7 and 8, certain algorithms might have witnessed interesting movement well before that date, as is sometimes the case.
#
# This occurred with Disney stock to various degrees. From a mid-term algorithmic trend and momentum perspective, Disney started to weaken in the middle of May, but a full blown price trend sell signal was not given until near the end of the month or early June, depending on the algorithm's sensitivity and trigger composition. Relative momentum, for instance, is documented to have begun to fall May 3rd while certain linear regression models started to fall days later.
#
# Popular trend indicators, including basic moving average cross as well as those with more advanced noise canceling filters, were triggered in late-May or early June depending on the formula sensitivity, a move that also occurred on increased as volume indicators provided a degree of confirmation.
#
# When trend and momentum algo triggers are executed, it can exacerbate the price trend and become a short-term self-fulfilling prophecy to certain degrees, which is what appeared to occur in this instance. Immediately following popular trend and momentum execution triggers being hit, Disney stock experienced increased selling pressure from early May to mid-May and then again in early June.
#
# But it wasn't just trend, momentum and volume indicators that were warning on Disney. Important algorithmic valuation and relative value metrics began flashing warning signals.
#
# Certain algorithms incorporate multiple factors in their execution triggers, including relative value analysis. Relative value algorithms can be meaningfully more complex to build than trend or momentum signals. Some of the triggers are based on multiple points of dislocation, such as the differential in the price of Disney relative to Comcast (NASDAQ:CMCSA), CBS (NYSE:CBS), Netflix and the PowerShares Dynamic Media ETF (NYSEARCA:PBS), for example.
#
# Certain relative value triggers use trend following concepts inside their analysis to determine the trade trigger, while others monitor historic price dislocation patterns and look for anomalistic behavior, often measured by standard deviation from a mean.
#
# Comparing the price of Disney to Comcast, a relative value dislocation with Netflix was first noticeable in mid-May, which could have triggered highly sensitive momentum systems. However, strong Disney relative value sell signals were given in mid- June and July, with the most conservative of algorithms, those which wait for multiple confirmation filters to confirm a signal, seeing late July trade execution triggers.
#
# The trend of price earnings ratio and its relative value with peer benchmarks is sometimes considered by algorithms.
#
# The trend saw Disney's P/E ratio start May above 20 and as of August 23 it trades near 17.8. Not only did Disney's P/E ratio begin dropping shortly after meaningful algorithmic triggers appeared to be hit, but the P/E ratio relative to peer benchmarks, such as Comcast, began to diverge from their mean relationship. Depending on the algorithm such relative value divergences are giving higher importance. (Between earnings periods price is more a factor, but P/E ratio, as well as a number of value metrics, are used as relative value anchors to provide context.)
#
# The relative value divergence not only occurred in P/E ratio, but also in the stock price, perhaps most materially witnessed in the stock price of Netflix, the company being shunned by Disney. This measure started to close in May but triggered conservative algorithmic signals in late July as the relative value of Netflix surpassed Disney, with July 17 being a volatility trigger in the spread relationship.
#
# In the case of Disney, the initial late May early June sell signal triggered a trend that temporarily bottomed July 5 before rallying into the beginning of August. While this trend momentum was unbroken on several time frames from the early May sell signals, the stock price rallied into the start of August, when it began to sell-off prior to the Netflix announcement again. Then on August 8, the price reacted to the fundamental news and broke down below the July 5 bottom on the highest volume in more than a year, which likely triggered, by definition, volatility-based execution triggers."
# ]
#
# tickers.each do |ticker1|
#   7.times do
#     Article.create!(title: titles.sample, summary: summaries.sample, body: bodies.sample, ticker_tag: ticker1, user_id: all_users.sample.id)
#   end
# end

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
