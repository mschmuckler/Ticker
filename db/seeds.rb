require 'rest-client'
require 'json'

User.destroy_all
Company.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

companies = RestClient.get('http://www.sharadar.com/meta/tickers.json', headers={})

JSON.parse(companies.body).each do |company|
  Company.create!(
    ticker: company['Ticker'],
    name: company['Name'],
    exchange: company['Exchange'],
    industry: company['Industry'],
    sector: company['Sector']
  )
end

# {"Sector": null
#    "CUSIP": "16951E104"
#     "Related Tickers": null
#      "Name": "CHINA ZENIX AUTO INTERNATIONAL LTD (Foreign)"
#       "Exchange": "NYSE"
#        "Ticker Change Date": null
#         "Last Updated": "2017-05-01"
#          "Industry": null
#           "Prior Tickers": null
#            "SIC": "3714"
#             "Currency": "CNY"
#              "First Added": "2016-02-04"
#               "Location": "CHINA"
#                "Perma Ticker": "165622"
#                 "Fama Industry": "Automobiles and Trucks"
#                  "Delisted From": null
#                   "Ticker": "ZX"
#                    "Is Foreign": "Y"}
